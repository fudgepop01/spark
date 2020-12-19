import {rD, rA, SIMM} from './instruction';

const pseudocode = `
rD ← ¬(rA) + EXTS(SIMM) + 1
`;

export default {
  "mnemonic": "subfic",
  "fullName": "Subtract from Immediate Carrying",
  "baseHex": "20000000",
  "opcode": "001000",
  "parameters": [

    rD,
    rA,
    SIMM
  ],
  "modifiers": [],
  pseudocode,
  "extension": -1,
  "reserved": null,
  "description": "The sum ¬ (rA) + EXTS(SIMM) + 1 is placed into rD (Equivalent to EXTS(SIMM)-(rA))."
}