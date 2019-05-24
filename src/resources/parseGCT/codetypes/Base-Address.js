import { int, boolean, typeValue, subTypeValue, addressTypeKeyword, addressLoadOperation, geckoRegister, fullAddress, signedInt } from './parameters';
import { toCode, sliceStringAtLengths, toHex } from './shared';

export const LoadIntoBaseAddress = {
  name: 'LoadIntoBaseAddress',
  typeValue: 0b010,
  subTypeValue: 0b000,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 5, 4, 4, 8, 4, 36],
  toCode(hexValues) {
    let binary = '';
    for (const hex of hexValues) {
      binary += hex.toString(2).padStart(8, '0');
    }
    let slices = sliceStringAtLengths(binary, this.slicePoints);
    let paramValues = slices.map(slice => parseInt(slice, 2));
    let paramStrings = this.parameters.map((param, index) => {
      return param.toCode(paramValues[index]);
    });
    return `loadIntoBaseAddress('${paramStrings[3]}', ${(paramStrings[4]) ? paramStrings[7] + ' + ' : ''}${(paramStrings[5]) ? paramStrings[1] + ' + ' : ''}${paramStrings[8]})`

  },
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address', false),
    subTypeValue(),
    addressLoadOperation('set it to something (=), or add to it (+=)'),
    boolean('includesAddress', 'if pointer / base is included', true),
    boolean('includesRegister', 'if a gecko register is included', true),
    int(8, 'padding', false),
    geckoRegister('value of the gecko register (if included)'),
    fullAddress('the address from which to fetch the value')
  ]
}

export const SetBaseAddress = {
  name: 'SetBaseAddress',
  typeValue: 0b010,
  subTypeValue: 0b001,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 5, 4, 4, 8, 4, 36],
  toCode(hexValues) {
    let binary = '';
    for (const hex of hexValues) {
      binary += hex.toString(2).padStart(8, '0');
    }
    let slices = sliceStringAtLengths(binary, this.slicePoints);
    let paramValues = slices.map(slice => parseInt(slice, 2));
    let paramStrings = this.parameters.map((param, index) => {
      return param.toCode(paramValues[index]);
    });
    return `setBaseAddress('${paramStrings[3]}', ${(paramStrings[4]) ? paramStrings[7] + ' + ' : ''}${(paramStrings[5]) ? paramStrings[1] + ' + ' : ''}${paramStrings[8]})`

  },
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address'),
    subTypeValue(),
    addressLoadOperation('set it to something (=), or add to it (+=)'),
    boolean('includesAddress', 'if pointer / base is included', true),
    boolean('includesRegister', 'if a gecko register is included', true),
    int(8, 'padding', false),
    geckoRegister('value of the gecko register (if included)'),
    int(16, 'the value to set BASE to', true)
  ]
}

export const StoreBaseAddressAt = {
  name: 'StoreBaseAddressAt',
  typeValue: 0b010,
  subTypeValue: 0b010,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 5, 4, 4, 8, 4, 36],
  toCode(hexValues) {
    let binary = '';
    for (const hex of hexValues) {
      binary += hex.toString(2).padStart(8, '0');
    }
    let slices = sliceStringAtLengths(binary, this.slicePoints);
    let paramValues = slices.map(slice => parseInt(slice, 2));
    let paramStrings = this.parameters.map((param, index) => {
      return param.toCode(paramValues[index]);
    });
    return `storeBaseAddressAt(${(paramStrings[4]) ? paramStrings[7] + ' + ' : ''}${(paramStrings[5]) ? paramStrings[1] + ' + ' : ''}${paramStrings[8]})`

  },
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address'),
    subTypeValue(),
    addressLoadOperation('set it to something (=), or add to it (+=)'),
    boolean('includesAddress', 'if pointer / base is included', true),
    boolean('includesRegister', 'if a gecko register is included', true),
    int(8, 'padding', false),
    geckoRegister('value of the gecko register (if included)'),
    fullAddress('the value to set BASE to')
  ]
}

export const nextCodeLocIntoBaseAddress = {
  name: 'nextCodeLocIntoBaseAddress',
  typeValue: 0b010,
  subTypeValue: 0b011,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 9, 16, 32],
  toCode,
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address'),
    subTypeValue(),
    int(9, 'padding', false),
    signedInt(16, 'offset', 'the offset from the next code location', true),
    int(32, 'padding', false)
  ]
}

export const LoadIntoPointerAddress = {
  name: 'LoadIntoPointerAddress',
  typeValue: 0b010,
  subTypeValue: 0b100,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 5, 4, 4, 8, 4, 36],
  toCode(hexValues) {
    let binary = '';
    for (const hex of hexValues) {
      binary += hex.toString(2).padStart(8, '0');
    }
    let slices = sliceStringAtLengths(binary, this.slicePoints);
    let paramValues = slices.map(slice => parseInt(slice, 2));
    let paramStrings = this.parameters.map((param, index) => {
      return param.toCode(paramValues[index]);
    });
    if (paramStrings[3] === 'undefined') console.log(hexValues.map(val => val.toString(8)));
    return `loadIntoPointerAddress('${paramStrings[3]}', ${(paramStrings[4]) ? paramStrings[7] + ' + ' : ''}${(paramStrings[5]) ? paramStrings[1] + ' + ' : ''}${paramStrings[8]})`

  },
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address', false),
    subTypeValue(),
    addressLoadOperation('set it to something (=), or add to it (+=)'),
    boolean('includesAddress', 'if pointer / base is included', true),
    boolean('includesRegister', 'if a gecko register is included', true),
    int(8, 'padding', false),
    geckoRegister('value of the gecko register (if included)'),
    fullAddress('the address from which to fetch the value')
  ]
}

export const SetPointerAddress = {
  name: 'SetPointerAddress',
  typeValue: 0b010,
  subTypeValue: 0b101,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 5, 4, 4, 8, 4, 36],
  toCode(hexValues) {
    let binary = '';
    for (const hex of hexValues) {
      binary += hex.toString(2).padStart(8, '0');
    }
    let slices = sliceStringAtLengths(binary, this.slicePoints);
    let paramValues = slices.map(slice => parseInt(slice, 2));
    let paramStrings = this.parameters.map((param, index) => {
      return param.toCode(paramValues[index]);
    });
    return `setPointerAddress('${paramStrings[3]}', ${(paramStrings[4]) ? paramStrings[7] + ' + ' : ''}${(paramStrings[5]) ? paramStrings[1] + ' + ' : ''}${paramStrings[8]})`

  },
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address'),
    subTypeValue(),
    addressLoadOperation('set it to something (=), or add to it (+=)'),
    boolean('includesAddress', 'if pointer / base is included', true),
    boolean('includesRegister', 'if a gecko register is included', true),
    int(8, 'padding', false),
    geckoRegister('value of the gecko register (if included)'),
    int(16, 'the value to set BASE to', true)
  ]
}

export const StorePointerAddressAt = {
  name: 'StorePointerAddressAt',
  typeValue: 0b010,
  subTypeValue: 0b110,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 5, 4, 4, 8, 4, 36],
  toCode(hexValues) {
    let binary = '';
    for (const hex of hexValues) {
      binary += hex.toString(2).padStart(8, '0');
    }
    let slices = sliceStringAtLengths(binary, this.slicePoints);
    let paramValues = slices.map(slice => parseInt(slice, 2));
    let paramStrings = this.parameters.map((param, index) => {
      return param.toCode(paramValues[index]);
    });
    return `storePointerAddressAt(${(paramStrings[4]) ? paramStrings[7] + ' + ' : ''}${(paramStrings[5]) ? paramStrings[1] + ' + ' : ''}${paramStrings[8]})`

  },
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address'),
    subTypeValue(),
    addressLoadOperation('set it to something (=), or add to it (+=)'),
    boolean('includesAddress', 'if pointer / base is included', true),
    boolean('includesRegister', 'if a gecko register is included', true),
    int(8, 'padding', false),
    geckoRegister('value of the gecko register (if included)'),
    fullAddress('the value to set BASE to')
  ]
}

export const nextCodeLocIntoPointerAddress = {
  name: 'nextCodeLocIntoPointerAddress',
  typeValue: 0b010,
  subTypeValue: 0b111,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 9, 16, 32],
  toCode,
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address'),
    subTypeValue(),
    int(9, 'padding', false),
    signedInt(16, 'offset', 'the offset from the next code location', true),
    int(32, 'padding', false)
  ]
}