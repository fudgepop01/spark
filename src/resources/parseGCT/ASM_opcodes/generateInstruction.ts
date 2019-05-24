import { fields as F, aliases as FA } from './instruction';

declare function require(name:string);
const fs = require('fs');

const info = `
mcrf mcrf
Move Condition Register Field (x’4C00 0000’)
mcrf crfD,crfS
  CR[4 * crfD–4 * crfD + 3] ¬ CR[4 * crfS–4 * crfS + 3]
The contents of condition register field crfS are copied into condition register field crfD. All
other condition register fields remain unchanged.
`;
const opExtension: number = 0;
const reserved = null;


const parseInstruction = (info: string, extension: number, reserved: [number, number] | null) => {
  let pieces = info.split("\n");
  let out: any = {};

  out.mnemonic = pieces[1].replace(/(.+) (.+)/g, '$1');
  out.fullName = pieces[2].replace(/([\w\s\-]+?) \(.’([\d\w\s]+)’\)/g, '$1');
  out.baseHex = pieces[2].replace(/([\w\s\-]+?) \(.’([\d\w\s]+)’\)/g, '$2').replace(' ', '');

  out.opcode = parseInt(out.baseHex, 16).toString(2).substr(0, 6);
  out.parameters = pieces[3]
    .replace(/[\w\d.]+? ([\w\d,]+)(?: \((?:\w+ = 0 \w+ = 0)\)| \((?:\w+ = 0)\))?/g, '$1')
    .split(',');
  out.parameters.unshift('OPCD');
  out.parameters = out.parameters.map((paramStr) => {return (F[paramStr]) ? F[paramStr] : FA[paramStr]});

  out.modifiers = pieces[3]
    .replace(/[\w\d.]+? [\w\d,]+(?: \((?:(\w+) = 0 (\w+) = 0)\)| \((?:(\w+) = 0)\))/g, '$1,$2,$3')
    .split(',')
    .map((paramStr) => {return (F[paramStr]) ? F[paramStr] : FA[paramStr]})
    .filter((param) => !!param);

  if(!pieces[3].includes("(")) out.modifiers = [];
  let offset = out.modifiers.length * out.modifiers.length;
  let i = 3;
  if (!offset) i++;
  out.pseudocode = "";
  while (pieces[i + offset].substr(0, pieces[i + offset].length).startsWith('  ')) {
    out.pseudocode += pieces[i + offset] + '\n';
    i++;
  }
  out.pseudocode = out.pseudocode.trim();

  out.extension = extension;
  out.reserved = reserved;

  out.description = "";
  while(i + offset < pieces.length) {
    out.description += pieces[i + offset] + '\n';
    i++;
  }
  out.description = out.description.trim();

  fs.writeFileSync(`./${out.mnemonic}.js`, "export default " + JSON.stringify(out, null, 2), {encoding: 'utf8'});
}

parseInstruction(info, opExtension, reserved);
