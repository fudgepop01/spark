class store {
  static getAll() {
    return {
      cache: this.cache,
      named: this.named
    };
  }

  static getAllType(type) {
    let out = new Map();
    for (let [key, value] of this.cache.entries()) {
      if (value instanceof type) {
        out.set(key, value);
      }
    }
    return out;
  }
  static getValue(key) {
    let target;
    if (typeof key == "number") target = this.cache;
    else target = this.named;

    if (target.has(key)) return target.get(key);
    else return null;
  }
  static addGet(key, data) {
    let target;
    if (typeof key == "number") target = this.cache;
    else target = this.named;

    if (target.has(key)) {
      return target.get(key);
    }
    else {
      target.set(key, data);
      return data;
    }
  }
  static forceSet(key, data) {
    let target;
    if (typeof key == "number") target = this.cache;
    else target = this.named;

    target.set(key, data);
    return data;
  }
}

store.cache = new Map();
store.named = new Map();

export default store;