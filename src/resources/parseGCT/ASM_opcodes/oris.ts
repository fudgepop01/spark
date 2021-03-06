import {rA, rS, UIMM} from './instruction';

const pseudocode = `
rA = (rS) | (UIMM || (16)0)
`;

export default {
  "mnemonic": "oris",
  "fullName": "OR Immediate Shifted",
  "baseHex": "64000000",
  "opcode": "011001",
  "parameters": [

    rA,
    rS,
    UIMM
  ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "The contents of rS are ORed with UIMM || 0x0000 and the result is placed into rA."
}