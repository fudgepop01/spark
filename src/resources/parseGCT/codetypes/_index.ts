import * as DRW from './direct-RAM-writes';
import * as BAD from './Base-Address';
import * as FC from './Flow-Control';
import * as GR from './Gecko-Register'
import * as ASM from './ASM-Codes';
import * as OTHER from './Other';
import * as IFMAIN from './If-Codes';
import * as GRIF from './GRIf-Codes';
// import * as CIF from './CIf-Codes';

const codeTypes = {
  ...DRW,
  ...BAD,
  ...FC,
  ...GR,
  ...ASM,
  ...OTHER,
  ...IFMAIN,
  ...GRIF,
  // ...CIF
}

export function getCodeType(hex) {
  const type = (hex & 0b11100000) >> 5;
  const subType = (hex & 0b00001110) >> 1;
  // console.log('0x' + subType.toString(16));
  for(const codeType of Object.values(codeTypes)) {
    if (codeType.typeValue === type && codeType.subTypeValue === subType) {
      return codeType;
    }
  }
}

