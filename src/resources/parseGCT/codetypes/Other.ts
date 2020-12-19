import { typeValue, addressTypeKeyword, subTypeValue, int, boolean } from './parameters';
import { toCode, toHex, sliceStringAtLengths } from './shared';

export const OnOff = {
  name: 'OnOff',
  typeValue: 0b110,
  subTypeValue: 0b110,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3],
  toCode,
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address'),
    subTypeValue(),
  ]
}

export const AddressRangeCheck = {
  name: 'AddressRangeCheck',
  typeValue: 0b110,
  subTypeValue: 0b111,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 21, 4, 16, 16],
  toCode,
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address'),
    subTypeValue(),
    int(21, 'padding'),
    boolean('apply endif?', 'weather or not there is an endif statement added to the end here', true),
    int(16, "address >= value", '', true),
    int(16, "address < value", '', true)
  ]
}

export const FullTerminator = {
  name: 'FullTerminator',
  typeValue: 0b111,
  subTypeValue: 0b000,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 21, 4, 16, 16],
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

    return `TerminatorBaseAddr(${paramStrings[5]})\nTerminatorPointerAddr(${paramStrings[6]})\n••FULL_TERMINATOR••`;
  },
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address'),
    subTypeValue(),
    int(21, 'padding'),
    boolean('apply endif?', 'weather or not there is an endif statement added to the end here', true),
    int(16, "BASE ADDR = this (if not 0)", '', true),
    int(16, "POINTER ADDR = this (if not 0)", '', true)
  ]
}

export const EndIf = {
  name: 'EndIf',
  typeValue: 0b111,
  subTypeValue: 0b001,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 5, 12, 8, 16, 16],
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

    return `EndIfBaseAddr(${paramStrings[6]})\nEndIfPointerAddr(${paramStrings[7]})\n${"}\n".repeat(parseInt(paramStrings[5], 16))}${paramStrings[3] === "true" ? "else {" : ""}`;

  },
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address'),
    subTypeValue(),
    boolean('inverse execution?', 'if true, then code execution status set to \'else\'', true),
    int(5, 'padding'),
    int(8, 'endif count', 'how many endifs to apply', true),
    int(16, "BASE ADDR = this (if not 0)", '', true),
    int(16, "POINTER ADDR = this (if not 0)", '', true)
  ]
}