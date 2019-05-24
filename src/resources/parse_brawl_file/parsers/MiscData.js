import typedarrayToBuffer from 'typedarray-to-buffer';
import AttributeData from './Attributes.json';
import CharSpecific from './CharSpecific.json';
import MainNode from './MiscData/MainNode.js';

//#region typedefs

/**
 * @typedef ParsedHeader
 * @type {Object}
 * @property {Header} header - the header of the file.
 */

/**
 * @typedef ParsedAttributes
 * @type {Object}
 * @property {Header} header - the header of the file.
 * @property {AttributeSection} attributes - the data obtained from the attributes section
 * @property {AttributeSection} SSEattributes - the data obtained from the SSE part of the attribtues section
 */

/**
 * @typedef Header
 * @type {Object}
 * @property {Uint8Array} buffer
 * @property {Object} data
 * @property {number} data.fileSize - total filesize of the moveset
 * @property {number} data.lookupOffset - total size of the data section, immediately following which is the lookup table
 * @property {number} data.lookupEntryCount - number of entries in the lookup table. each entry is 0x4 bytes
 * @property {number} data.sectionCount - number of entries in the data table. each entry is 0x8 bytes
 * @property {number} data.externalSubRoutineCount - number of external subroutines. each entry is 0x8 bytes
 * @property {Array.<number>} data.pad - padding for the next section
 */

/**
 * @typedef AttributeSection
 * @type {Object}
 * @property {Uint8Array} buffer
 * @property {Object} data - keys are offsets, values are the values at those offsets. names are generated from a file
 */

//#endregion

//#region helper functions

const getString = (data, fileOffset, stringOffset) => {
  return Parser.start().endianess("big")
  .skip(fileOffset)
  .skip(stringOffset)
  .string("name", {zeroTerminated: true})
  .parse(data)
  .name;
}

const calcLengths = (arr, lookupOffset) => {
  arr = arr.map((value, index) => {return { value, index }});
  arr.sort((a, b) => {
    return a.value - b.value;
  });

  let sizes = [];
  for (let i = 0; i < arr.length; i++) {
    if (i == arr.length - 1) arr[i].len = lookupOffset - arr[i].value;
    else arr[i].len = arr[i + 1].value - arr[i].value;
  }

  arr.sort((a, b) => {
    return a.index - b.index
  });

  return arr.map((item) => item.len);
}

//#endregion

//#region parsers

/**
 * this function directly modifies the MiscData that was
 * passed in, which acts as a pointer here.
 * @param {Buffer} data
 * @param {Object} MiscData - should be empty at this point
 */
const parseHeader = (data, MiscData) => {
  const result = Parser.start()
  .endianess("big")
  .uint32("fileSize")
  .uint32("lookupOffset")
  .uint32("lookupEntryCount")
  .uint32("sectionCount")
  .uint32("externalSubRoutineCount")
  .array("pad", {
    type: "uint32be",
    length: 3
  })
  .parse(data);

  MiscData.header = {};
  MiscData.header.buffer = data.subarray(0, 0x20);
  MiscData.header.data = result;
}

/**
 * Parses the attributes section. This is always at offset 0x0 (relative to the file location)
 * and contains the same amount of entries each time in the same order. Therefor, we can parse
 * this right off the bat
 * @param {Buffer} data
 * @param {ParsedHeader} MiscData
 */
const parseAttributes = (data, MiscData) => {
  let toExec = "";
  let unknownCount = 0
  let out = {};
  let NormAttributes = Parser.start().endianess("big");
  let SSEAttributes = Parser.start().endianess("big").skip(Object.entries(AttributeData).length * 0x4);
  for (const [offset, attribute] of Object.entries(AttributeData)) {
    if (attribute.name == "unknown") {
      attribute.name = "unknown_" + unknownCount;
      unknownCount++;
    }
    if (attribute.type == "int") {
      NormAttributes.int32("_" + offset);
      SSEAttributes.int32("_" + offset);
    }
    else {
      NormAttributes.float("_" + offset);
      SSEAttributes.float("_" + offset);
    }
  }

  MiscData.attributes = {
    data: NormAttributes.parse(data),
    buffer: data.subarray(0, Object.entries(AttributeData).length * 0x4)
  };

  MiscData.SSEattributes = {
    data: SSEAttributes.parse(data),
    buffer: data.subarray(Object.entries(AttributeData).length * 0x4, (Object.entries(AttributeData).length * 0x4) * 2)
  };
}

/**
 * parses the data table and obtains data from all of its offsets
 * each data table entry is 0x8 bytes:
 * the first 4 being where to find the actual data
 * the last 4 being where to find the string
 * @param {Buffer} data
 * @param {ParsedAttributes} MiscData
 */
const parseDataTable = (data, MiscData) => {
  const { lookupOffset, lookupEntryCount, sectionCount, externalSubRoutineCount } = MiscData.header.data;
  const startOffset = lookupOffset + lookupEntryCount * 0x4;
  const numEntries = sectionCount + externalSubRoutineCount;

  let parser = new Parser().create(function(){this.numEntries = numEntries}).endianess("big").skip(startOffset);
  let parseOneEntry = new Parser().endianess("big").uint32("dataOffset").uint32("stringTableOffset");
  parser.array("contents", {
    length: "numEntries",
    type: parseOneEntry
  });

  const content = parser.parse(data).contents;
  MiscData.dataSection = content.slice(0, sectionCount);
  MiscData.externalReferences = content.slice(sectionCount);
}

const parseMainData = (data, offset, charName) => {
  if (offset.name != "data") return;

  const labels = [
    "SubactionFlags",
    "ModelVisibility",
    "Attributes",
    "SSEAttributes",
    "MiscSection",
    "CommonActionFlags",
    "Unknown7",
    "ActionInterrupts",
    "EntryActions",
    "ExitActions",
    "ActionPre",
    "SubactionMain",
    "SubactionGFX",
    "SubactionSFX",
    "SubactionOther",
    "AnchoredItemPositions",
    "GooeyBombPositions",
    "BoneRef1",
    "BoneRef2",
    "EntryActionOverrides",
    "ExitActionOverrides",
    "Unknown22",
    "SamusArmCannonPositions",
    "Unknkown24",
    "StaticArticles",
    "EntryArticle"
  ];
  const dataSections = {};
  for (const [i, entry] of labels.entries()) {
    dataSections[entry] = data.readUInt32BE(offset.dataOffset + 0x4 * i);
  }

  console.log(dataSections);
}

/**
 * processes the data obtained from parseDataTable
 */
const getStringDataFromTable = (data, MiscData, charName) => {

  // variables
  const { lookupOffset, lookupEntryCount, sectionCount, externalSubRoutineCount } = MiscData.header.data;
  const fileStringTableOffset = lookupOffset + lookupEntryCount * 0x4 + (sectionCount + externalSubRoutineCount) * 0x8;

  const dataSection = MiscData.dataSection;
  const externals = MiscData.externalReferences;
  let lens = [];

  lens = calcLengths(dataSection.map(section => section.dataOffset), lookupOffset);
  for (const [i, offset] of dataSection.entries()) {
    dataSection[i].name = getString(data, fileStringTableOffset, offset.stringTableOffset);
    dataSection[i].len = lens[i];
    dataSection[i].data = parseMainData(data, offset, charName);
  }

  lens = calcLengths(externals.map(section => section.dataOffset), lookupOffset);
  for (const [i, offset] of externals.entries()) {
    externals[i].name = getString(data, fileStringTableOffset, offset.stringTableOffset);
    externals[i].len = lens[i];
  }
}

/**
 * fetches the list of pointers to offsets in every bit of the file
 * @param {Buffer} data - the data buffer
 * @param {*} MiscData - the contents
 */
const parseOffsetChunk = (data, MiscData) => {
  let {lookupOffset, lookupEntryCount} = MiscData.header.data;

  let out = [];
  for (let i = 0; i < lookupEntryCount; i++) {

    out.push(data.readUInt32BE(lookupOffset + i * 0x4));
  }
  MiscData.offsetList = out;
}

/**
 *
 * @param {Buffer} data
 */
const miscDataParser = (data, charName) => {
  data = typedarrayToBuffer(data);

  console.log(new MainNode(data, charName));

  /*const MiscData = new Object();
  parseHeader(data, MiscData);
  data = typedarrayToBuffer(data.subarray(0x20));

  // parseAttributes =
  parseOffsetChunk(data, MiscData);

  parseAttributes(data, MiscData);
  parseDataTable(data, MiscData);
  getStringDataFromTable(data, MiscData, charName);
  console.log(MiscData);*/
}

export default miscDataParser;

