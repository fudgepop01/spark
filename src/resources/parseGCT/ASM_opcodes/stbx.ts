import {rS, rA, rB} from './instruction';

const pseudocode = `
if rA = 0
then b ← 0
else b ← (rA)
EA ← b + EXTS(d)
MEM(EA, 8) ← (frS)
`;

export default {
  "mnemonic": "stbx",
  "fullName": "Store Byte Indexed",
  "baseHex": "7C0001AE",
  "opcode": "011111",
  "parameters": [

    rS,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 215,
    bits: [
      22,
      30
    ]
  },
  "reserved": [
    [
      31
    ]
  ],
  "description": "EA is the sum (rA|0) + (rB). The contents of the low-order eight bits of rS are stored into\nthe byte in memory addressed by EA."
}