import commands from '../ASM_opcodes/_index';

export const ASMCode = () => {
  let out = {
    name: 'ASMCode',
    description: 'the ASM code',
    codeParam: true,
    isValidCode(value) {
      return ['byte','halfword','word'].includes(value);
    },
    toCode(value) {
      if (value instanceof Buffer) {
        let intermediate = value.toString("hex")
        value = "";
        for (const ch of intermediate) {
          value += parseInt(ch, 16).toString(2).padStart(4, '0');
        }
      }
      let commandBits = value.match(/.{1,32}/g);
      let thing = commandBits.map((bits) => {
        return Object.values(commands).filter(cmd => {
          return cmd.opcode == bits.substring(0, 6)
        }).filter((cmd: any) => {
          if (cmd.extension != -1) {
            return cmd.extension.value == parseInt(bits.substring(cmd.extension.bits[0], cmd.extension.bits[1] + 1), 2);
          }
          else {
            return cmd;
          }
        }).map(cmd => {
          let params = [];
          for (const param of (cmd.parameters as any)) {
            if (param.displayType === 'constant') {
              params.push(param.registerConstants[parseInt(bits.substring(param.bits[0], (param.bits[1]) ? param.bits[1] + 1: param.bits[0] + 1), 2)])
            } else {
              let prefix = '';
              let postfix = '';
              if (['hex', 'immediate', 'signed_immediate'].includes(param.displayType)) prefix = '0x';
              if (param.displayType === 'binary') prefix = '0b';
              if (param.prefix) prefix = param.prefix;
              let paramValue = parseInt(bits.substring(param.bits[0], (param.bits[1]) ? param.bits[1] + 1: param.bits[0] + 1), 2);
              if (param.displayType === 'signed_immediate') paramValue - Math.ceil((2 ** (param.bits[1] - param.bits[0])) / 2);
              if (['hex', 'immediate', 'signed_immediate'].includes(param.displayType)) postfix = ` /* ${paramValue} */`;
              params.push(
                prefix + paramValue
                .toString(({
                  'boolean': 10,
                  'hex': 16,
                  'binary': 2,
                  'register': 10,
                  'immediate': 16,
                  'signed_immediate': 16,
                  'hidden': 2,
                })[param.displayType]).toUpperCase()
                + postfix
              );
            }
          }
          return [cmd, params];
        });
      });

      let out = '';

      for (const [cmdData] of thing) {
        if (!cmdData) continue;
        out += `${cmdData[0].mnemonic} ${cmdData[1].join(", ")}\n`
      }
      // console.log(out);
      return out;
    }
  }

  // console.log(Object.values(commands).map(cmd => cmd.fullName));

  return out;
}