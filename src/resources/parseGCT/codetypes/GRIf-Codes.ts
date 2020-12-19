import { typeValue, addressTypeKeyword, subTypeValue, int, address, geckoRegister} from './parameters';
import { toHex, sliceStringAtLengths } from './shared';

function toCode(hexValues) {
  let binary = '';
  for (const hex of hexValues) {
    binary += hex.toString(2).padStart(8, '0');
  }
  let slices = sliceStringAtLengths(binary, this.slicePoints);
  let paramValues = slices.map(slice => parseInt(slice, 2));
  let paramStrings = this.parameters.map((param, index) => {
    return param.toCode(paramValues[index]);
  });
  return `${parseInt(paramStrings[3], 16) % 4 === 1 ? "}\n" : ""}${this.name}(${paramStrings.filter((val, index) => this.parameters[index].codeParam).join(', ')}) {`;
}

export const IfGREqual32 = {
  name: 'IfGREqual',
  typeValue: 0b101,
  subTypeValue: 0b000,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 25, 4, 4, 8, 16],
  toCode,
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address'),
    subTypeValue(),
    address('the address to set this to. Add 1 to apply an endif first'),
    geckoRegister('if this & !(the last argument)'),
    geckoRegister('...equals this & !(the last argument)'),
    int(8, 'padding'),
    int(8, 'modifier', 'the value that is &!\'d with the GRs')
  ]
}

export const IfGRNotEqual32 = {
  name: 'IfGRNotEqual',
  typeValue: 0b101,
  subTypeValue: 0b001,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 25, 4, 4, 8, 16],
  toCode,
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address'),
    subTypeValue(),
    address('the address to set this to. Add 1 to apply an endif first'),
    geckoRegister('if this & !(the last argument)'),
    geckoRegister('...equals this & !(the last argument)'),
    int(8, 'padding'),
    int(8, 'modifier', 'the value that is &!\'d with the GRs')
  ]
}

export const IfGRGreaterThan32 = {
  name: 'IfGRGreaterThan',
  typeValue: 0b101,
  subTypeValue: 0b010,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 25, 4, 4, 8, 16],
  toCode,
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address'),
    subTypeValue(),
    address('the address to set this to. Add 1 to apply an endif first'),
    geckoRegister('if this & !(the last argument)'),
    geckoRegister('...equals this & !(the last argument)'),
    int(8, 'padding'),
    int(8, 'modifier', 'the value that is &!\'d with the GRs')
  ]
}

export const IfGRLessThan32 = {
  name: 'IfGRLessThan',
  typeValue: 0b101,
  subTypeValue: 0b011,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 25, 4, 4, 8, 16],
  toCode,
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address'),
    subTypeValue(),
    address('the address to set this to. Add 1 to apply an endif first'),
    geckoRegister('if this & !(the last argument)'),
    geckoRegister('...equals this & !(the last argument)'),
    int(8, 'padding'),
    int(8, 'modifier', 'the value that is &!\'d with the GRs')
  ]
}