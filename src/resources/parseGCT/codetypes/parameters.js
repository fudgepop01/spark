export const typeValue = () => {
  let out = {
    name: 'typeValue',
    description: 'which type of gecko command this is',
    codeParam: false,
    toCode(value) {
      return value.toString(2);
    }
  };

  return out;
};

//#region inclusive

export const addressType = (desc, codeParam=true) => {
  let out = {
    name: 'addressType',
    description: '',
    codeParam: true,
    isValidCode(value) {
      return ['base','pointer'].includes(value);
    },
    toCode(value) {
      return `${({
        0: 'BASE',
        1: 'POINTER'
      })[value]}`;
    }
  };

  out.codeParam = codeParam;
  out.description = desc;
  return out;
};

export const subTypeValue = () => {
  let out = {
    name: 'subTypeValue',
    description: 'which gecko command this is (based on typeValue)',
    codeParam: false,
    toCode(value) {
      return value.toString(2);
    }
  };

  return out;
};

export const address = (desc) => {
  let out = {
    name: 'address',
    description: '',
    codeParam: true,
    isValidCode(value) {
      return 0 <= value && value <= 0x1FFFFFF;
    },
    toCode(value) {
      return `0x${value.toString(16)}`;
    }
  };

  out.description = desc;
  return out;
};

export const fullAddress = (desc) => {
  let out = {
    name: 'valueSize',
    description: '',
    codeParam: true,
    isValidCode(value) {
      return 0 <= value && value <= 0xFFFFFFFF;
    },
    toCode(value) {
      return `0x${value.toString(16).padStart(8, '0')}`;
    }
  };

  out.description = desc;
  return out;
}

export const geckoRegister = (desc) => {
  let out = {
    name: 'valueSize',
    description: '',
    codeParam: true,
    isValidCode(value) {
      return 0 <= value && value <= 0xF;
    },
    toCode(value) {
      return `GR(${value.toString(16)})`;
    }
  };

  out.description = desc;
  return out;
}

export const block = (desc) => {
  let out = {
    name: 'block',
    description: '',
    codeParam: true,
    isValidCode(value) {
      return 0 <= value && value <= 0xF;
    },
    toCode(value) {
      return `BL(${value.toString(16)})`;
    }
  };

  out.description = desc;
  return out;
}

export const execStatus = (desc) => {
  let out = {
    name: 'execStatus',
    description: '',
    codeParam: true,
    isValidCode(value) {
      return ['base','pointer'].includes(value);
    },
    toCode(value) {
      return `${({
        0: 'true',
        1: 'false',
        2: 'always'
      })[value]}`;
    }
  };

  out.description = desc;
  return out;
}

//#endregion

//#region types

export const int = (size, name, desc, codeParam) => {
  let out = {
    size: 0,
    name: '',
    description: '',
    isValidCode(value) {
      let multiplier = value / 4;
      let num = ''
      for (let i = 0; i < multiplier; i++) num += 'F';
      return 0 <= value && value <= parseInt(num, 16);
    },
    toCode(value) {
      return "0x" + value.toString(16);
    }
  };

  out.codeParam = codeParam;
  out.size = size;
  out.name = name;
  out.description = desc;
  return out;
}

export const signedInt = (size, name, desc, codeParam) => {
  let out = {
    size: 0,
    name: '',
    description: '',
    isValidCode(value) {
      // i'll need to think of this later
    },
    toCode(value) {
      console.log(value)
      let bin = value.toString(2).padStart(20, '0');
      console.log(bin);
      let out = parseInt(bin.substring(1), 2);
      return `${bin.startsWith('1') ? '-' : ''}0x` + out.toString(16);
    }
  };

  out.codeParam = codeParam;
  out.size = size;
  out.name = name;
  out.description = desc;
  return out;
}

export const str = (name, desc, codeParam) => {
  let out = {
    name: '',
    description: '',
    codeParam: true,
    isValidCode(value) {
      let multiplier = value / 4;
      let num = ''
      for (let i = 0; i < multiplier; i++) num += 'F';
      return 0 <= value && value <= parseInt(num, 16);
    },
    toCode(value) {
      let out = "";
      let legible = "";
      for (const val of value) {
        if (0x21 <= val && val < 0x7F) {
          legible += " " + String.fromCharCode(val);
        } else {
          legible += " ▒";
        }
        if (/0x[0-9a-fA-F]+$/.test(out)) out += val.toString(16).padStart(2, '0');
        else out += `0x${val.toString(16).padStart(2, '0')}`
      }

      return `${out} \n//${legible}`;
    }
  };

  out.codeParam = codeParam;
  out.name = name;
  out.description = desc;
  return out;
}

export const boolean = (name, desc, codeParam) => {
  let out = {
    name: '',
    description: '',
    codeParam: true,
    isValidCode(value) {
      let multiplier = value / 4;
      let num = ''
      for (let i = 0; i < multiplier; i++) num += 'F';
      return 0 <= value && value <= parseInt(num, 16);
    },
    toCode(value) {
      return `${({
        0: false,
        1: true
      })[value]}`;
    }
  };

  out.codeParam = codeParam;
  out.name = name;
  out.description = desc;
  return out;
}

//#endregion

//#region other

export const bitSize = (desc) => {
  let out = {
    name: 'valueSize',
    description: '',
    codeParam: true,
    isValidCode(value) {
      return ['byte','halfword','word'].includes(value);
    },
    toCode(value) {
      return `"${({
        0: '8bits',
        1: '16bits',
        2: '32bits'
      })[value]}"`;
    }
  }

  out.description = desc;
  return out;
}

export const valueSize = (desc) => {
  let out = {
    name: 'valueSize',
    description: '',
    codeParam: true,
    isValidCode(value) {
      return ['byte','halfword','word'].includes(value);
    },
    toCode(value) {
      return `"${({
        0: 'byte',
        1: 'halfword',
        2: 'word'
      })[value]}"`;
    }
  };

  out.description = desc;
  return out;
}

export const addressLoadOperation = (desc) => {
  let out = {
    name: 'valueSize',
    description: '',
    codeParam: true,
    isValidCode(value) {
      return ['=', '+='].includes(value);
    },
    toCode(value) {
      return `${({
        0: '=',
        1: '+=',
      })[value]}`;
    }
  };

  out.description = desc;
  return out;
}

export const operatorsType = (desc) => {
  let out = {
    name: 'valueSize',
    description: '',
    codeParam: true,
    isValidCode(value) {
      return ['+', '*', '|', '&', '^', '<<', '>>', 'rol', 'asr', 'fadds', 'fmuls'].includes(value);
    },
    toCode(value) {
      return `${({
        0: '+',
        1: '*',
        2: '|',
        3: '&',
        4: '^',
        5: '<<',
        6: '>>',
        7: 'rol',
        8: 'asr',
        9: 'fadds',
        10: 'fmuls'
      })[value]}`;
    }
  };

  out.description = desc;
  return out;
}

export const addressTypeKeyword = (desc) => {
  let out = {
    name: 'valueSize',
    description: '',
    codeParam: true,
    isValidCode(value) {
      return ['BASE', 'POINTER'].includes(value);
    },
    toCode(value) {
      return `${({
        0: 'BASE',
        1: 'POINTER',
      })[value]}`;
    }
  };

  out.description = desc;
  return out;
}

export const counterType = (desc) => {
  let out = {
    name: 'valueSize',
    description: '',
    codeParam: true,
    isValidCode(value) {
      return ['byte','halfword','word'].includes(value);
    },
    toCode(value) {
      return `"${({
        0: 'DoCheck',
        1: 'EndifDoCheck',
        8: 'DoCheckAndZero',
        9: 'EndifDoCheckAndZero'
      })[value]}"`;
    }
  }

  out.description = desc;
  return out;
}

//#endregion