import typedarrayToBuffer from 'typedarray-to-buffer';

import MiscData from './parsers/MiscData.js';

//#region helper functions

/**
 * finds the earliest index of a list of values
 * in a buffer.
 *
 * @param {Buffer} data
 * @param {Array} values
 * @returns the lowest occuring index of all the numbers
 */
const earliestIndexOf = (data, values) => {
  let index = Number.MAX_SAFE_INTEGER;

  for (let value of values) {
    const thisIndex = data.indexOf(value);
    if (thisIndex != -1 && thisIndex < index) {
      index = thisIndex;
    }
  }

  return index
}

//#endregion

//#region parsers
const parserMethods = {
  ARCHeader() {
    return {
      size: 0x40,
      parser: Parser.start()
      .endianess("big")
      .string("tag", {length: 4, stripNull: true})
      .uint16("version")
      .uint16("numFiles")
      .array("_unknown1", {
        type: "uint32be",
        length: 2
      })
      .string("name", {length: 48, stripNull: true})
    }
  },
  ARCFileHeader() {
    return {
      size: 0x20,
      parser: Parser.start()
      .endianess("big")
      .uint16("type", {formatter: (value) => {
        const ARCFileType = ["None", "MiscData", "ModelData", "TextureData", "AnimationData", "SceneData", "Type6", "GroupedArchive", "EffectData"];
        return [value, ARCFileType[value]];
      }})
      .uint16("index")
      .uint32("fileSize")
      .uint8("groupIndex")
      .uint8("padding")
      .uint16("redirectIndex")
      .array("pad", {
        type: "uint32be",
        length: 5
      })
    }
  },
  ARCFileContent(size = 0) {
    return {
      size,
      parser: Parser.start()
      .endianess("big")
    }
  }
}

const parseSection = (data, type, size = 0) => {
  const toParse = parserMethods[type](size);
  return {
    data: toParse.parser.parse(data),
    buffer: data.subarray(0, toParse.size)
  }
}

const fileTypeParser = (data, type, charName) => {
  return ({
    MiscData
  })[type](data, charName);
}

//#endregion

/**
 *
 * @param {ArrayBuffer} data
 */
const parseFile = async (data) => {
  data = new Uint8Array(data);
  data = typedarrayToBuffer(data);

  const fullFile = {};

//#region ARCHeader

  // parse the incoming file's header and store it
  // along with the raw buffer (just incase)
  const ARCHeader = parseSection(data, "ARCHeader");
  fullFile.header = ARCHeader;
  fullFile.children = [];

  //#endregion

//#region Split Key Sections

  // create an array with a dummy entry for each file in the ARC
  const files = new Array(ARCHeader.data.numFiles);

  // split off the section that was parsed
  // this is okay because we stored the raw buffer in ARCHeader
  data = typedarrayToBuffer(new Uint8Array(data.subarray(ARCHeader.buffer.length)));

  // section off each file into their own chunks consisting of:
  // a header, content, and padding (if it exsists)
  for (const [i, file] of files.entries()) {
    const out = {};
    out.ARCFileHeader = parseSection(data, "ARCFileHeader");
    data = typedarrayToBuffer(new Uint8Array(data.subarray(out.ARCFileHeader.buffer.length)));

    out.ARCFileContent = parseSection(data, "ARCFileContent", out.ARCFileHeader.data.fileSize);
    data = typedarrayToBuffer(new Uint8Array(data.subarray(out.ARCFileContent.buffer.length)));

    const nextHeaderOffset = earliestIndexOf(data, [1, 2, 3, 4, 5, 6, 7, 8])
    out.endPadding = data.subarray(0, nextHeaderOffset - 1);
    data = typedarrayToBuffer(new Uint8Array(data.subarray(nextHeaderOffset - 1)));

    files[i] = out;
  }

  fullFile.children.push(...files);

//#region actually parse the files

  for (const file of fullFile.children) {
    // console.log(file);
    file.ARCFileContent = fileTypeParser(file.ARCFileContent.buffer, file.ARCFileHeader.data.type[1], fullFile.header.data.name);
  }

  // console.log(fullFile);
}

export default parseFile;
