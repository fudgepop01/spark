import Section from './Section';
import { TypeBase } from '../Types/types';
import Store from './Cache';

/**
 *
 *
 * @class Header
 * @extends {Section}
 */
class Header extends Section {
  _order = new Array(8);

  constructor(data, parent) {
    super(data, parent);
    let dataList = TypeBase.createTypes(
      [
        ['bu32', 5],
        ['bi32', 3]
      ],
      data, 0
    );

    for (const [i, type] of dataList.entries()) {
      this._order[i] = type;
    }

    Store.addGet("fileSize", this._order[0]);
    Store.addGet("lookupOffset", this._order[1]);
    Store.addGet("lookupEntryCount", this._order[2]);
    Store.addGet("sectionCount", this._order[3]);
    Store.addGet("externalSubRoutineCount", this._order[4]);
  }

  get fileSize() { return this._order[0]; }
  get lookupOffset() { return this._order[1]; }
  get lookupEntryCount() { return this._order[2]; }
  get sectionCount() { return this._order[3]; }
  get externalSubroutineCount() { return this._order[4]; }
  get padding() { return this._order.slice(5); }
}

export default Header;
