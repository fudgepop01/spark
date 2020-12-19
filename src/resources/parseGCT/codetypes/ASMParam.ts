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
              if (param.displayType === 'hex') prefix = '0x';
              if (param.displayType === 'binary') prefix = '0b';
              if (param.prefix) prefix = param.prefix;
              let paramValue = parseInt(bits.substring(param.bits[0], (param.bits[1]) ? param.bits[1] + 1: param.bits[0] + 1), 2);
              if (param.displayType === 'signed_immediate') paramValue - Math.ceil((2 ** (param.bits[1] - param.bits[0])) / 2);
              params.push(
                prefix + paramValue
                .toString(({
                  'boolean': 10,
                  'hex': 16,
                  'binary': 2,
                  'register': 10,
                  'immediate': 10,
                  'signed_immedaite': 10,
                  'hidden': 2,
                })[param.displayType])
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