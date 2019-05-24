import {int, subTypeValue, typeValue, boolean, addressLoadOperation, addressTypeKeyword, geckoRegister, address, bitSize, fullAddress, operatorsType} from './parameters';
import { toCode, sliceStringAtLengths, toHex } from './shared';

export const setGeckoRegister = {
  name: 'setGeckoRegister',
  typeValue: 0b100,
  subTypeValue: 0b000,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 1, 4, 4, 12, 4, 32],
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
    return `setGeckoRegister(${paramStrings[7]}, ${paramStrings[4]}, ${(paramStrings[5]) ? paramStrings[1] + ' + ' : ''}${paramStrings[8]})`

  },
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('base address vs. pointer address'),
    subTypeValue(),
    int(4, 'padding', false),
    addressLoadOperation('type of operation to be performed on this address'),
    boolean('includes base address?'),
    int(12, 'padding', false),
    geckoRegister('which register to modify'),
    int(32, 'value', 'the base value to set the gecko register to', true)
  ]
}

export const loadIntoGeckoRegister = {
  name: 'loadIntoGeckoRegister',
  typeValue: 0b100,
  subTypeValue: 0b001,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 1, 4, 4, 12, 4, 32],
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
    return `loadIntoGeckoRegister(${paramStrings[7]}, ${paramStrings[4]}, ${(paramStrings[5]) ? paramStrings[1] + ' + ' : ''}${paramStrings[8]})`

  },
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('base address vs. pointer address'),
    subTypeValue(),
    int(4, 'padding', false),
    bitSize('how many bits to load from the given address'),
    boolean('includes base address?'),
    int(12, 'padding', false),
    geckoRegister('which register to modify'),
    address('where to load the value from', true)
  ]
}

export const StoreGeckoRegisterAddressAt = {
  name: 'StoreGeckoRegisterAddressAt',
  typeValue: 0b100,
  subTypeValue: 0b010,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 5, 4, 12, 4, 32],
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
    return `storeGeckoRegisterAddressAt(${paramStrings[6]}, ${(paramStrings[4]) ? paramStrings[1] + ' + ' : ''}${paramStrings[7]}, ${paramStrings[5]})`

  },
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address'),
    subTypeValue(),
    addressLoadOperation('set it to something (=), or add to it (+=)'),
    boolean('includesAddress', 'if pointer / base is included', true),
    int(12, 'writeCount', 'how many consecutive times to store the value', false),
    geckoRegister('value of the gecko register (if included)'),
    fullAddress('the value to set BASE to')
  ]
}

export const geckoDirectValueOperation = {
  name: 'geckoDirectValueOperation',
  typeValue: 0b100,
  subTypeValue: 0b011,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 5, 4, 12, 4, 32],
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
    return `geckoDirectValueOperation(${paramStrings[6]} ${paramStrings[3]} ${paramStrings[5]} )`

  },
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address', false),
    subTypeValue(),
    operatorsType('what operation to perform'),
    int(4, 'kind (?)', 'not entirely sure what this does', true),
    int(12, 'padding', false),
    geckoRegister('which register to apply the operation to'),
    int(32, 'value', 'which value to perform the operation against', true)
  ]
}

export const geckoRegisterOperation = {
  name: 'geckoRegisterOperation',
  typeValue: 0b100,
  subTypeValue: 0b100,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 5, 4, 12, 4, 28, 4],
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
    return `geckoRegisterOperation(${paramStrings[6]} ${paramStrings[3]} ${paramStrings[8]} )`

  },
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address', false),
    subTypeValue(),
    operatorsType('what operation to perform'),
    int(4, 'kind (?)', 'not entirely sure what this does', true),
    int(12, 'padding', false),
    geckoRegister('which register to apply the operation to'),
    int(28, 'padding', false),
    geckoRegister('which register goes with the operator')
  ]
}

export const memoryCopy = {
  name: 'memoryCopy',
  typeValue: 0b100,
  subTypeValue: 0b101,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 17, 4, 4, 32],
  toCode,
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address', false),
    subTypeValue(),
    int(4, 'byteCount', 'how many bytes to copy from grN to grK + XXXXXXXX', true),
    geckoRegister('which register to copy from'),
    geckoRegister('which gecko register stores the base offset to copy to'),
    fullAddress('the offset to add to grK')
  ]
}

export const memoryCopy2 = {
  name: 'memoryCopy2',
  typeValue: 0b100,
  subTypeValue: 0b110,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 17, 4, 4, 32],
  toCode,
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address', false),
    subTypeValue(),
    int(4, 'byteCount', 'how many bytes to copy from grN+XXXXXXXX to grK', true),
    geckoRegister('which register to copy from'),
    geckoRegister('which gecko register stores the base offset to copy to'),
    fullAddress('the offset to add to grK')
  ]
}