import { typeValue, addressTypeKeyword, subTypeValue, int, counterType} from './parameters';
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
  return `${paramStrings[4].startsWith("Endif") ? "}\n" : ""}${this.name}(${paramStrings.filter((val, index) => this.parameters[index].codeParam).join(', ')}) {`;
}

export const IfEqual32 = {
  name: 'IfCEqual',
  typeValue: 0b101,
  subTypeValue: 0b100,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 5, 16, 4, 16, 16],
  toCode,
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address'),
    subTypeValue(),
    int(5, 'padding'),
    int(16, 'counter', 'the counter that goes up', true),
    counterType('the sequence in which actions are performed'),
    int(16, 'not-value', 'the value which to not()', true),
    int(16, 'main-value', 'the value to compare with')
  ]
}

export const IfNotEqual32 = {
  name: 'IfCNotEqual',
  typeValue: 0b101,
  subTypeValue: 0b101,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 5, 16, 4, 16, 16],
  toCode,
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address'),
    subTypeValue(),
    int(5, 'padding'),
    int(16, 'counter', 'the counter that goes up', true),
    counterType('the sequence in which actions are performed'),
    int(16, 'not-value', 'the value which to not()', true),
    int(16, 'main-value', 'the value to compare with')
  ]
}

export const IfGreaterThan32 = {
  name: 'IfCGreaterThan',
  typeValue: 0b101,
  subTypeValue: 0b110,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 5, 16, 4, 16, 16],
  toCode,
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address'),
    subTypeValue(),
    int(5, 'padding'),
    int(16, 'counter', 'the counter that goes up', true),
    counterType('the sequence in which actions are performed'),
    int(16, 'not-value', 'the value which to not()', true),
    int(16, 'main-value', 'the value to compare with')
  ]
}

export const IfLessThan32 = {
  name: 'IfCLessThan',
  typeValue: 0b101,
  subTypeValue: 0b111,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 5, 16, 4, 16, 16],
  toCode,
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address'),
    subTypeValue(),
    int(5, 'padding'),
    int(16, 'counter', 'the counter that goes up', true),
    counterType('the sequence in which actions are performed'),
    int(16, 'not-value', 'the value which to not()', true),
    int(16, 'main-value', 'the value to compare with')
  ]
}