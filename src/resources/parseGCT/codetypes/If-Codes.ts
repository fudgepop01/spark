import { typeValue, addressTypeKeyword, subTypeValue, int, address} from './parameters';
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

export const IfEqual32 = {
  name: 'IfEqual32',
  typeValue: 0b001,
  subTypeValue: 0b000,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 25, 32],
  toCode,
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address'),
    subTypeValue(),
    address('the address to set this to. Add 1 to apply an endif first'),
    int(32, 'comparison', 'the value to compare BASE/POINTER to', true)
  ]
}

export const IfNotEqual32 = {
  name: 'IfNotEqual32',
  typeValue: 0b001,
  subTypeValue: 0b001,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 25, 32],
  toCode,
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address'),
    subTypeValue(),
    address('the address to set this to. Add 1 to apply an endif first'),
    int(32, 'comparison', 'the value to compare BASE/POINTER to', true)
  ]
}

export const IfGreaterThan32 = {
  name: 'IfGreaterThan32',
  typeValue: 0b001,
  subTypeValue: 0b010,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 25, 32],
  toCode,
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address'),
    subTypeValue(),
    address('the address to set this to. Add 1 to apply an endif first'),
    int(32, 'comparison', 'the value to compare BASE/POINTER to', true)
  ]
}

export const IfLessThan32 = {
  name: 'IfLessThan32',
  typeValue: 0b001,
  subTypeValue: 0b011,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 25, 32],
  toCode,
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address'),
    subTypeValue(),
    address('the address to set this to. Add 1 to apply an endif first'),
    int(32, 'comparison', 'the value to compare BASE/POINTER to', true)
  ]
}

export const IfEqual16 = {
  name: 'IfEqual16',
  typeValue: 0b001,
  subTypeValue: 0b100,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 25, 32],
  toCode,
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address'),
    subTypeValue(),
    address('the address to set this to. Add 1 to apply an endif first'),
    int(32, 'comparison', 'the value to compare BASE/POINTER to', true)
  ]
}

export const IfNotEqual16 = {
  name: 'IfNotEqual16',
  typeValue: 0b001,
  subTypeValue: 0b101,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 25, 32],
  toCode,
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address'),
    subTypeValue(),
    address('the address to set this to. Add 1 to apply an endif first'),
    int(32, 'comparison', 'the value to compare BASE/POINTER to', true)
  ]
}

export const IfGreaterThan16 = {
  name: 'IfGreaterThan16',
  typeValue: 0b001,
  subTypeValue: 0b110,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 25, 32],
  toCode,
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address'),
    subTypeValue(),
    address('the address to set this to. Add 1 to apply an endif first'),
    int(32, 'comparison', 'the value to compare BASE/POINTER to', true)
  ]
}

export const IfLessThan16 = {
  name: 'IfLessThan16',
  typeValue: 0b001,
  subTypeValue: 0b111,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 25, 32],
  toCode,
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address'),
    subTypeValue(),
    address('the address to set this to. Add 1 to apply an endif first'),
    int(32, 'comparison', 'the value to compare BASE/POINTER to', true)
  ]
}