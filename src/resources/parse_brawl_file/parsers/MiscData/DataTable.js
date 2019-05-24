import Section from './Section';
import DataHeader from './DataHeaders';
import { TypeBase } from '../Types/types';
import typedarrayToBuffer from 'typedarray-to-buffer';

/**
 *
 *
 * @class Header
 * @extends {Section}
 */
class DataTable extends Section {
  externals;
  entries;

  constructor(entryCount, externalCount, stringTableOffset, data, parent) {
    super(data, parent);

    this.entries = new Array(entryCount);
    this.externals = new Array(externalCount);
    let positionTracker = 0;
    for (let i = 0; i < entryCount; i++) {
      this.entries[i] = new DataTableEntry(data.subarray(positionTracker, positionTracker + 0x8), this, stringTableOffset);
      positionTracker += 0x8;
    }
    for (let i = 0; i < externalCount; i++) {
      this.externals[i] = new DataTableEntry(data.subarray(positionTracker, positionTracker + 0x8), this, stringTableOffset);
      positionTracker += 0x8;
    }
  }
}

class DataTableEntry extends Section {
  dataPointer;
  namePointer;

  constructor(data, parent, strOffset) {
    data = typedarrayToBuffer(data);
    super(data, parent);
    let dataList = TypeBase.createTypes(
      [
        ['pointer', 1],
        ['pointer', 1, strOffset]
      ],
      data, 0
    )

    this.dataPointer = dataList[0];
    this.namePointer = dataList[1];
    this.name = this.namePointer.initTargetType('str', this.root().buffer);
    if (this.namePointer.getTarget().value == "data") {
      this.addChild(
        new DataHeader(
          this.dataPointer,
          this
        )
      );
    };
  }
}

export default DataTable;