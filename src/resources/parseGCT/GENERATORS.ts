import opcodes from './ASM_opcodes/_index';

let mainOpcodes = "";
let simplifiedOpcodes = "";
for (const opcode of Object.values(opcodes)) {
  mainOpcodes += opcode['mnemonic'] + '|'
  if (opcode['simple']) {
    simplifiedOpcodes += (opcode['simple'] as any[]).map(c => c.name).join('|') + '|';
  }
}

console.log(mainOpcodes);
console.log(simplifiedOpcodes);