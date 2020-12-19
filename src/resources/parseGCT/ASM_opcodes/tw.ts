import {TO, rA, rB} from './instruction';

const pseudocode = `
a ← EXTS(rA)
b ← EXTS(rB)
if (a < b) & TO[0] then TRAP
if (a > b) & TO[1] then TRAP
if (a = b) & TO[2] then TRAP
if (a <U b) & TO[3] then TRAP
if (a >U b) & TO[4] then TRAP
`;

export default {
  "mnemonic": "tw",
  "fullName": "Trap Word",
  "baseHex": "7C000008",
  "opcode": "011111",
  "parameters": [

    TO,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 4,
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
  "description": "The contents of rA are compared arithmetically with the contents rB for TO[0, 1, 2]. The\ncontents of rA are compared logically with the contents rB for TO[3, 4]. If any bit in the TO\nfield is set and its corresponding condition is met by the result of the comparison, then the\nsystem trap handler is invoked.",
  "simple": [{
    name: "tweq",
    isSimple(values: number[]) { return values[0] === 4 },
    "equivalent": "tw 4, rA, rB",
    parameters: [ rA, rB ]
  }, {
    name: "rwlge",
    isSimple(values: number[]) { return values[0] === 5 },
    "equivalent": "tw 5, rA, rB",
    parameters: [ rA, rB ]
  }, {
    name: "trap",
    isSimple(values: number[]) { return values[0] === 31 && values[1] === 0 && values[2] === 0 },
    "equivalent": "tw 31, 0, 0",
    parameters: []
  }]
}