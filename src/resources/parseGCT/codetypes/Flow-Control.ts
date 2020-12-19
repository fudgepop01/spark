import {int, subTypeValue, typeValue, addressType, block, execStatus, signedInt} from './parameters';
import { toCode, sliceStringAtLengths, toHex } from './shared';

export const setRepeat = {
  name: 'setRepeat',
  typeValue: 0b011,
  subTypeValue: 0b000,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 9, 16, 28, 4],
  toCode,
  toHex,
  parameters: [
    typeValue(),
    addressType('base address vs. pointer address', false),
    subTypeValue(),
    int(9, 'padding', false),
    int(16, 'repeat count', 'how many times this block of code will repeat', true),
    int(28, 'padding', false),
    block(4, 'block', 'which block this repeat is for (0 through F)')
  ]
}

export const execRepeat = {
  name: 'execRepeat',
  typeValue: 0b011,
  subTypeValue: 0b001,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 53, 4],
  toCode,
  toHex,
  parameters: [
    typeValue(),
    addressType('base address vs. pointer address', false),
    subTypeValue(),
    int(53, 'padding', false),
    block(4, 'block', 'which repeat block to execute (0 through F)')
  ]
}

export const ret = {
  name: 'return',
  typeValue: 0b011,
  subTypeValue: 0b010,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 4, 49, 4],
  toCode,
  toHex,
  parameters: [
    typeValue(),
    addressType('base address vs. pointer address', false),
    subTypeValue(),
    execStatus('when the return will be executed'),
    int(49, 'padding', false),
    block(4, 'block', 'the destination (jumps to next code address stored here)')
  ]
}

export const goto = {
  name: 'goto',
  typeValue: 0b011,
  subTypeValue: 0b011,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 5, 4, 16, 32],
  toCode,
  toHex,
  parameters: [
    typeValue(),
    addressType('base address vs. pointer address', false),
    subTypeValue(),
    execStatus('when the jump will be executed'),
    int(4, 'padding', false),
    signedInt(16, 'offset', 'where the goto jumps. calculated with "next line of code + this"', true),
    int(32, 'padding', false),
  ]
}

export const goSub = {
  name: 'goSub',
  typeValue: 0b011,
  subTypeValue: 0b100,
  kind: "fixed",
  length: 16,
  slicePoints: [3, 1, 3, 4, 4, 16, 28, 4],
  toCode,
  toHex,
  parameters: [
    typeValue(),
    addressType('base address vs. pointer address', false),
    subTypeValue(),
    execStatus('when the jump will be executed'),
    int(4, 'padding', false),
    signedInt(16, 'offset', 'where this will jump after storing the next code address', true),
    int(28, 'padding', false),
    block('the place in which the next code address is stored')
  ]
}