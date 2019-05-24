
class Section {
  parent;
  children;
  buffer;
  offset;
  size;

  constructor(buffer, parent=null, offset=0x0) {
    this.buffer = buffer;
    this.size = buffer.length;
    this.parent = parent;
    this.offset = offset;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
    this.children.sort((child1, child2) => {
      return child1.Offset - child2.Offset;
    })
  }

  addChildren(children) {
    this.children.push(...children);
    this.children.sort((child1, child2) => {
      return child1.Offset - child2.Offset;
    })
  }

  root() {
    return (this.parent != null) ? this.parent.root() : this;
  }

  parent() {
    return (this.parent != null) ? this.parent : this;
  }

}

export default Section;