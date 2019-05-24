
import {ASMCode} from './ASMParam';
import {typeValue, addressTypeKeyword, subTypeValue, int, geckoRegister, fullAddress, address} from './parameters';
import { toCode, sliceStringAtLengths, toHex } from './shared';

export const ExecuteASM = {
  name: 'ExecuteASM',
  typeValue: 0b110,
  subTypeValue: 0b000,
  kind: "terminated",
  terminator: 0,
  slicePoints: [3, 1, 3, 25, 32],
  toCode(hexValues) {
    let binary = '';
    for (const hex of hexValues) {
      binary += hex.toString(2).padStart(8, '0');
    }
    let slices = sliceStringAtLengths(binary, this.slicePoints);
    let paramValues = slices.map((slice, i) => {
      if (i === 5) return slice;
      else return parseInt(slice, 2)
    });
    let paramStrings = this.parameters.map((param, index) => {
      return param.toCode(paramValues[index]);
    });
    return `ExecuteASM(${paramStrings[3]}) {\n${paramStrings[5]}}\n`
  },
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address', false),
    subTypeValue(),
    address('where this should replace the instruction'),
    int(32, 'lineCount', 'number of lines involved in this code', false), // calculated when compiled
    ASMCode()
  ]
}

export const InsertASM = {
  name: 'InsertASM',
  typeValue: 0b110,
  subTypeValue: 0b001,
  kind: "terminated",
  terminator: 0,
  slicePoints: [3, 1, 3, 25, 32],
  toCode(hexValues) {
    let binary = '';
    for (const hex of hexValues) {
      binary += hex.toString(2).padStart(8, '0');
    }
    let slices = sliceStringAtLengths(binary, this.slicePoints);
    let paramValues = slices.map((slice, i) => {
      if (i === 5) return slice;
      else return parseInt(slice, 2)
    });
    let paramStrings = this.parameters.map((param, index) => {
      return param.toCode(paramValues[index]);
    });
    return `InsertASM(${paramStrings[3]}) {\n${paramStrings[5]}}\n`
  },
  toHex,
  parameters: [
    typeValue(),
    addressTypeKeyword('includes base address vs. pointer address', false),
    subTypeValue(),
    address('where this should replace the instruction'),
    int(32, 'lineCount', 'number of lines involved in this code', false), // calculated when compiled
    ASMCode()
  ]
}