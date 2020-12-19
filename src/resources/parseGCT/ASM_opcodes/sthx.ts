import {rS, rA, rB} from './instruction';

const pseudocode = `
if rA = 0
then b ← 0
else b ← (rA)
EA ← b + (rB)
MEM(EA, 2) ← rS[16-31]
`;

export default {
  "mnemonic": "sthx",
  "fullName": "Store Half Word Indexed",
  "baseHex": "7C00032E",
  "opcode": "011111",
  "parameters": [

    rS,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 407,
    bits: [
      21,
      30
    ]
  },
  "reserved": [
    [
      31
    ]
  ],
  "description": "EA is the sum (rA|0) + (rB). The contents of the low-order 16 bits of rS are stored into the\nhalf word in memory addressed by EA."
}