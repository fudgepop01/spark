const fs = require('fs');

const Attributes = fs.readFileSync('./Attributes.txt', {encoding: 'utf-8'});

const out = {};

let offset = "";
for (const [i, line] of Attributes.split("\n").entries()) {
  if (i % 3 == 0) {
    let sections = line.split(/ |\n/g, 1);
    let type = "float";
    if (sections[0].startsWith("*")) {
      type = "int";
      sections[0] = sections[0].substr(1);
    }
    offset = sections[0];

    out[offset] = {};

    if (line.substring((type == "float") ? sections[0].length: sections[0].length + 1).length > 0) {
      out[offset].name = line.substring((type == "float") ? sections[0].length + 1: sections[0].length + 2);
    } else {
      out[offset].name = "unknown";
    }

    out[offset].type = type;
  }
  else if (i % 3 == 1) {
    if (line) out[offset].description = line;
    else out[offset].description = " --- ";
  }
}

fs.writeFileSync("./Attributes.json", JSON.stringify(out, null, 2), {encoding: 'utf-8'});

