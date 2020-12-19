import { getCodeType } from './codetypes/_index';

const parser = (binData: Buffer) => {
  let out = "";
  let commands = [];
  let j = 0;
  for (let i = 0; i < binData.length; i++) {
    j++;
    if (j > 10000) break;
    let value = binData[i];
    let codeType: any = getCodeType(value);
    if (codeType) {
      let parts = [];
      // fixed = the length of this code has a fixed value
      if (codeType.kind == "fixed") {
        let limit = i + codeType.length / 2;
        if (limit >= binData.length) limit = binData.length;
        while (i < limit) {
          parts.push(binData[i]);
          out += binData[i].toString(16).padStart(2, '0');
          i++;
        }

        console.log(parts.reduce((acc, v, i) => {
          return acc + v.toString(16).padStart(2, '0') + ((i % 4 === 3) ? ' ' : '');
        }, ''))
        out += " ";
        i--;
        commands.push(codeType.toCode(parts));
      }
      // dependent = the length of this code is dependent on a value found within
      else if (codeType.kind == "dependent") {
        let parsedData = codeType.toCode(binData.slice(i));
        commands.push(parsedData.string);
        let size = Math.ceil(parsedData.size / 8) * 8 + 8;
        out += binData.slice(i, i + size).toString('hex');
        i += size;
        out += " ";
        i--;
      }
      // handles instances where things are skipped
      // this issue used to stump me for ages lol
      else if (codeType.kind == "flow") {
        let limit = i + codeType.length / 2;
        if (limit >= binData.length) limit = binData.length;
        while (i < limit) {
          parts.push(binData[i]);
          out += binData[i].toString(16).padStart(2, '0');
          i++;
        }
        out += " ";
        i--;

        let results = codeType.toCode(parts);
        commands.push(results.string);
        i += results.skip
      }
      // if the code type is not fixed, or dependent, then it must be a code that has a terminator
      // ie. this code stops when the hex value 0x60000000 is reached
      else {
        let limit = codeType.terminator;
        // apply a limit to prevent the webpage from crashing (just in-case)
        let secondLimit = i + 1000;
        parts.push(binData[i]);
        out += binData[i].toString(16).padStart(2, '0');
        while(i < secondLimit) {
          i++;
          out += binData[i].toString(16).padStart(2, '0');
          parts.push(binData[i]);
          // if the location at which i is aligned, and the previous four bytes are equivalent to
          // this code's terminator, then break out because the code is done being read
          if((i + 1) % 8 === 0 && parts.slice(-4).reduce((a,b) => a + b) === limit) break;
        }
        parts.push(binData[i]);
        commands.push(codeType.toCode(parts));
      }
    }
    else {
      out += value.toString(16).padStart(2, '0');
    }

    // console.log(value.toString(16).padStart(8, '0'));
    console.log(commands[commands.length - 1])

    out += ` // ${i}`;
    out += "\n";
  }
  return postProcess(commands.join('\n'));
}

function postProcess(commands) {
  let indentation = 0;
  let lines = commands.split('\n');
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    if (line === '••FULL_TERMINATOR••') {
      lines.splice(i, 1, ..."}".repeat(indentation >= 0 ? indentation: 0).split(''));
      i--;
      continue;
    }
    if (line.startsWith("}")) indentation--;

    line = "  ".repeat(indentation >= 0 ? indentation : 0) + line;

    if (line.endsWith("{")) indentation++;

    lines[i] = line;
  }
  return lines.join('\n');
}

export default parser;