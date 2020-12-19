import {rS, rA, rB} from './instruction';

const pseudocode = `
if rA = 0
then b ← 0
else b ← (rA)
EA ← b + (rB)
n ← XER[25–31]
r ← rS – 1
i ← 0
do while n > 0
  if i = 0
    then r ← r + 1 (mod 32)
  MEM(EA, 1) ← GPR(r)[i,i + 7]
  i ← i + 8
  if i = 32
    then i ← 0
  EA ← EA + 1
  n ← n – 1
`;

export default {
  "mnemonic": "stswx",
  "fullName": "Store String Word Indexed",
  "baseHex": "7C00052A",
  "opcode": "011111",
  "parameters": [

    rS,
    rA,
    rB
  ],
  "modifiers": [],
  pseudocode,
  "extension": {
    value: 661,
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
  "description": "EA is the sum (rA|0) + (rB). Let n = XER[25–31]; n is the number of bytes to store. Let\nnr = CEIL(n / 4);nr is the number of registers to supply data.\nn consecutive bytes starting at EA are stored from GPRs rS through rS + nr – 1. Bytes are\nstored left to right from each register. The sequence of registers wraps around through r0 if\nrequired. If n = 0, no bytes are stored.\nUnder certain conditions (for example, segment boundary crossing) the data alignment\nexception handler may be invoked. For additional information about data alignment\nexceptions, see Section 6.4.3, “DSI Exception (0x00300),” in the PowerPC Microprocessor\nFamily: The Programming Environments manual.\nNOTE: In some implementations, this instruction is likely to have a greater latency and take\nlonger to execute, perhaps much longer, than a sequence of individual store instructions\nthat produce the same results."
}