import Section from './Section';
import { TypeBase } from '../Types/types';
import CharSpecific from '../CharSpecific';
import Store from './Cache';
import typedarrayToBuffer from 'typedarray-to-buffer';

/**
 * handles the data-header section of the binary file
 */
class DataOffsets extends Section {
  _order;

  constructor(pointer, parent) {
    let charName = Store.getValue("charName");
    let data = typedarrayToBuffer(parent.root().buffer.subarray(pointer.value + 0x20, pointer.value + 0x20 + CharSpecific[charName].dataSize))
    super(data, parent);

    let dataList = TypeBase.createTypes(
      [
        ['pointer', 28],
      ],
      data, 0
    );

    for (const [i, type] of dataList.entries()) {
      this._order[i] = type;
    }
  }

}

export default DataOffsets;