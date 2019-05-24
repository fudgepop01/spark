import Store from '../MiscData/Cache';

export class TypeBase {
  value;
  offset;

  constructor(offset, value) {
    this.offset = offset;
    this.value = value;
    Store.addGet(offset, this);
  }

  static createTypes(typeList, data, baseOffset) {
    const out = [];
    let positionTracker = 0x0;
    const factory = ({
      bi32(data, offset) {
        out.push(new bi32(data, offset));
        positionTracker += 0x4;
      },
      bu32(data, offset) {
        out.push(new bu32(data, offset));
        positionTracker += 0x4;
      },
      bi16(data, offset) {
        out.push(new bi16(data, offset));
        positionTracker += 0x2;
      },
      bu16(data, offset) {
        out.push(new bu16(data, offset));
        positionTracker += 0x2;
      },
      bi8(data, offset) {
        out.push(new i8(data, offset));
        positionTracker += 0x1;
      },
      u8(data, offset) {
        out.push(new u8(data, offset));
        positionTracker += 0x1;
      },
      float(data, offset) {
        out.push(new bi32(data, offset));
        positionTracker += 0x4;
      },
      pointer(data, offset, offsetFix=0) {
        out.push(new pointer(data, offset, offsetFix));
        positionTracker += 0x4;
      },
      str(data, offset) {
        let item = new str(data, offset);
        out.push(item);
        positionTracker += item._size;
      }
    });
    for (const type of typeList) {
      if ( Array.isArray(type) ) {
        while (type[1] > 0) {
          factory[type[0]](
            data,
            baseOffset + positionTracker,
            (type[2]) ? type[2] : null
          );
          type[1]--;
        }
      }
      else {
        factory[type](data, baseOffset + positionTracker);
      }
    }
    return out;
  }

  get buffer() {
    return Buffer.from([(this.value & 0xFF000000) >> 24, (this.value & 0xFF0000) >> 16, (this.value & 0xFF00) >> 8, this.value & 0xFF])
  }
}
//#region basics
export class bi32 extends TypeBase {
  _size = 0x4;

  constructor(data, offset) {
    super(offset, data.readInt32BE(offset));
  }
}

export class bu32 extends TypeBase {
  _size = 0x4;

  constructor(data, offset) {
    super(offset, data.readUInt32BE(offset));
  }
}

export class bi16 extends TypeBase {
  _size = 0x2;

  constructor(data, offset) {
    super(offset, data.readInt16BE(offset));
  }
}

export class bu16 extends TypeBase {
  _size = 0x2;

  constructor(data, offset) {
    super(offset, data.readUInt16BE(offset));
  }
}

export class i8 extends TypeBase {
  _size = 0x1;

  constructor(data, offset) {
    super(offset, data.readInt8(offset));
  }
}

export class u8 extends TypeBase {
  _size = 0x1;

  constructor(data, offset) {
    super(offset, data.readInt8(offset));
  }
}

export class bfloat extends TypeBase {
  _size = 0x4;

  constructor(data, offset) {
    super(offset, data.readFloatBE(offset));
  }
}

export class str extends TypeBase {
  constructor(data, offset) {
    let myValue = "";
    for (let i = 0; i < data.length; i++) {
      if (data[i + offset] == 0) break;
      myValue += String.fromCharCode(data[i + offset]);
    }
    super(offset, myValue);
    this._size = myValue.length;
  }
}
//#endregion


export class pointer extends TypeBase {
  _size = 0x4;
  offsetFix;

  constructor(data, offset, offsetFix = 0) {
    super(offset, data.readUInt32BE(offset));
    this.offsetFix = offsetFix;
  }

  initTargetType(type, data) {
    return TypeBase.createTypes([[type, 1]], data, this.value + this.offsetFix);
  }

  getTarget() {
    return Store.getValue(this.value + this.offsetFix);
  }

  getDestination() {
    let target = this.getTarget();
    if (target instanceof pointer) return target.getDestination();
    else return target;
  }
}