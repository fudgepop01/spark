import Header from './Header';
import Offsets from './Offsets';
import DataTable from './DataTable';
import Section from './Section';
import typedarrayToBuffer from 'typedarray-to-buffer';
import Store from './Cache';

/**
 * class responsible for handling the MiscData filetype
 * @class MiscData
 */
class MiscData extends Section {
  header;
  offsets;
  dataTable;

  constructor(data, charName) {
    super(data);
    Store.addGet("charName", charName);

    // header section
    this.header = new Header(typedarrayToBuffer(data.subarray(0, 0x20)), this);

    // offset section
    let lookupOffset = this.header.lookupOffset.value;
    let lookupEntryCount = this.header.lookupEntryCount.value;
    data = data.subarray(0x20 + lookupOffset);
    this.offsets = new Offsets(typedarrayToBuffer(data.subarray(0, lookupEntryCount * 0x4)), this);

    // datatable section
    data = data.subarray(lookupEntryCount * 0x4);
    let dataTableEntryCount = this.header.sectionCount.value;
    let dataTableExternalCount = this.header.externalSubroutineCount.value;
    this.dataTable = new DataTable(
      dataTableEntryCount,
      dataTableExternalCount,
      (lookupOffset + lookupEntryCount * 0x4 + (dataTableEntryCount + dataTableExternalCount) * 0x8) + 0x20,
      typedarrayToBuffer(data.subarray(0, (dataTableEntryCount + dataTableExternalCount) * 0x8)),
      this
    );

    //console.log(Store.getAll());

    // this.addChildren([this.header, this.offsets, this.dataTable]);
  }
}

export default MiscData;