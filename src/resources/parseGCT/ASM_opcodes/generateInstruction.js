/*"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const instruction_1 = require("./instruction");
const fs = require('fs');
const info = `
xoris xoris
XOR Immediate Shifted (x’6C00 0000’)
xoris rA,rS,UIMM
    rA ¬ (rS) Å (UIMM || (16)0)
The contents of rS are XORed with UIMM || 0x0000 and the result is placed into rA.
`;
const opExtension = -1;
const reserved = null;

const parseInstruction = (info, extension, reserved) => {
    let pieces = info.split("\n");
    let out = {};
    out.mnemonic = pieces[1].replace(/(.+) (.+)/g, '$1');
    out.fullName = pieces[2].replace(/([\w\s\-]+?) \(.’([\d\w\s]+)’\)/g, '$1');
    out.baseHex = pieces[2].replace(/([\w\s\-]+?) \(.’([\d\w\s]+)’\)/g, '$2').replace(' ', '');
    out.opcode = parseInt(out.baseHex, 16).toString(2).substr(0, 6).padStart(6, '0');
    out.parameters = pieces[3]
        .replace(/[\w\d.]+? ([\w\d,]+)(?: \((?:\w+ = 0 \w+ = 0)\)| \((?:\w+ = 0)\))?/g, '$1')
        .split(',');
    out.parameters.unshift('OPCD');
    out.parameters = out.parameters.map((paramStr) => { return (instruction_1.fields[paramStr]) ? instruction_1.fields[paramStr] : instruction_1.aliases[paramStr]; });
    out.modifiers = pieces[3]
        .replace(/[\w\d.]+? [\w\d,]+(?: \((?:(\w+) = 0 (\w+) = 0)\)| \((?:(\w+) = 0)\))/g, '$1,$2,$3')
        .split(',')
        .map((paramStr) => { return (instruction_1.fields[paramStr]) ? instruction_1.fields[paramStr] : instruction_1.aliases[paramStr]; })
        .filter((param) => !!param);
    if (!pieces[3].includes("("))
        out.modifiers = [];
    let offset = out.modifiers.length * out.modifiers.length;
    let i = 3;
    if (!offset)
        i++;
    out.pseudocode = "";
    while (pieces[i + offset].substr(0, pieces[i + offset].length).startsWith('  ')) {
        out.pseudocode += pieces[i + offset] + '\n';
        i++;
    }
    out.pseudocode = out.pseudocode.trim();
    out.extension = extension;
    out.reserved = reserved;
    out.description = "";
    while (i + offset < pieces.length) {
        out.description += pieces[i + offset] + '\n';
        i++;
    }
    out.description = out.description.trim();
    fs.writeFileSync(`./${out.mnemonic}.js`, "export default " + JSON.stringify(out, null, 2), { encoding: 'utf8' });
};
parseInstruction(info, opExtension, reserved);
*/