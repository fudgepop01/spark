import Section from './Section';
import { TypeBase } from '../Types/types';

class Offsets extends Section {
  size;
  offsets = new Map();

  /**
   * @param {Buffer} data
   * @param {Section} parent
   */
  constructor(data, parent) {
    super(data, parent);

    let dataList = TypeBase.createTypes(
      [
        ['pointer', data.length / 4],
      ],
      data, 0
    );

    for (const pointer of dataList.values()) {
      this.offsets.set(pointer.value, pointer);
    }
  }


}

export default Offsets;