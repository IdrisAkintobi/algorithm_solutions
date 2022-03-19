class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  print() {
    const arr = [];
    let node = this.head;
    while (node) {
      arr.push(node.val);
      node = node.next;
    }
    return arr;
  }
  push(val) {
    const node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const removed = this.tail;
      this.tail = removed.prev;
      this.tail.next = null;
      removed.prev = null;
    }
    this.length--;
    return this;
  }
  shift() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const newHead = this.head.next;
      newHead.prev = null;
      this.head.next = null;
      this.head = newHead;
    }
    this.length--;
    return this;
  }
  unshift(val) {
    const node = new Node(val);
    if (!this.head) return undefined;
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }
  get(index) {
    if (index >= this.length || index < 0) return undefined;
    let node = this.head;
    while (index--) {
      node = node.next;
    }
    return node;
  }
  set(index, val) {
    let node = this.get(index);
    node.val = val;
    return this;
  }
  insert(index, val) {
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);
    const node = new Node(val);
    const cur = this.get(index);
    const prev = cur.prev;
    prev.next = node;
    node.prev = prev;
    node.next = cur;
    cur.prev = node;
    this.length++;
    return this;
  }
  delete(index) {
    if (this.length === 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    const node = this.get(index);
    const prev = node.prev;
    const nxt = node.next;
    prev.next = nxt;
    nxt.prev = prev;
    node.prev = null;
    node.next = null;
    this.length--;
    return this;
  }
}
