import {rS, rA, d} from './instruction';

const pseudocode = `
EA ← (rA) + EXTS(d)
MEM(EA, 1) ← rS[24-31]
rA ← EA
`;

export default {
  "mnemonic": "stbu",
  "fullName": "Store Byte with Update",
  "baseHex": "9C000000",
  "opcode": "100111",
  "parameters": [

    rS,
    rA,
    d(0)
  ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "EA is the sum (rA) + d. The contents of the low-order eight bits of rS are stored into the\nbyte in memory addressed by EA.\nEA is placed into rA.\nIf rA = 0, the instruction form is invalid."
}