import { ASMCode } from './ASMParam';
import { address, addressType, typeValue, subTypeValue, int, str, valueSize } from './parameters';
import { toCode, sliceStringAtLengths, toHex } from './shared';

export const writeFill8 = {
  name: 'writeFill8',
  typeValue: 0b000,
  subTypeValue: 0b000,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 25, 16, 8, 8],
  toCode,
  toHex,
  parameters: [
    typeValue(),
    addressType('base address vs. pointer address'),
    subTypeValue(),
    address('where the value will be written'),
    int(16, 'repeat', 'the number of times this will be repeated'),
    int(8, 'padding'),
    int(8, 'value', 'the value to be written', true)
  ]
}

export const writeFill16 = {
  name: 'writeFill16',
  typeValue: 0b000,
  subTypeValue: 0b001,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 25, 16, 16],
  toCode,
  toHex,
  parameters: [
    typeValue(),
    addressType('base address vs. pointer address'),
    subTypeValue(),
    address('where the value will be written'),
    int(16, 'repeat', 'the number of times this will be repeated'),
    int(16, 'value', 'the value to be written', true)
  ]
}

export const write32 = {
  name: 'write32',
  typeValue: 0b000,
  subTypeValue: 0b010,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 25, 32],
  toCode,
  toHex,
  parameters: [
    typeValue(),
    addressType('base address vs. pointer address'),
    subTypeValue(),
    address('where the value will be written'),
    int(32, 'value', 'the value to be written', true)
  ]
}

export const writeString = {
  name: 'writeString',
  typeValue: 0b000,
  subTypeValue: 0b011,
  kind: "dependent",
  length: -1,
  slicePoints: [3, 1, 3, 25, 32],
  toCode(hexValues) {
    let binary = '';
    for (const hex of hexValues) {
      binary += hex.toString(2).padStart(8, '0');
    }
    let slices = sliceStringAtLengths(binary, this.slicePoints);
    let paramValues = slices.map(slice => parseInt(slice, 2));
    // unfortunately gross, but it works
    paramValues[5] = hexValues.slice(8, 8 + paramValues[4]);
    let paramStrings = this.parameters.map((param, index) => {
      return param.toCode(paramValues[index]);
    });
    return {
      size: (paramValues[5] as unknown as Buffer).length,
      string: `${this.name}(${[paramStrings[1], paramStrings[3]].join(', ')}) {\n${paramStrings[5]}\n}`
    }
  },
  toHex,
  parameters: [
    typeValue(),
    addressType('base address vs. pointer address'),
    subTypeValue(),
    address('where the value will be written'),
    int(32, 'value', 'number of values in the string', false),
    ASMCode()
    // str('string', 'string to write at the location', true)
  ]
}

export const slider = {
  name: 'sliderSkip',
  typeValue: 0b000,
  subTypeValue: 0b100,
  kind: "fixed",
  length: 32,
  slicePoints: [3, 1, 3, 25, 32, 4, 12, 16, 32],
  toCode,
  toHex,
  parameters: [
    typeValue(),
    addressType('base address vs. pointer address'),
    subTypeValue(),
    address('starting address'),
    int(32, 'initial value', 'the initial value for the write', true),
    valueSize('how large the value to insert should be'),
    int(12, 'additional writes', 'how many extra addresses to write to (the first is assumed)', true),
    int(16, 'address increment', 'how many bytes to skip by for each address write', true),
    int(32, 'value increment', 'how much to add to the value after each additional RAM write', true)
  ]
}