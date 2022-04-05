class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  print() {
    const output = [];
    let curr = this.head;
    while (curr) {
      output.push(curr.val);
      curr = curr.next;
    }
    return output;
  }
  pop() {
    if (!this.head) return undefined;
    let prev = this.head;
    let curr = prev;
    while (curr.next) {
      prev = curr;
      curr = prev.next;
    }
    this.tail = prev;
    prev.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return curr.val;
  }
  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this.print();
  }
  shift() {
    if (!this.head) return;
    const head = this.head;
    const newHead = this.head.next;
    this.head = newHead;
    this.length--;
    if (this.length === 0) this.tail = null;
    return head.val;
  }
  unshift(val) {
    const node = new Node(val);
    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.length++;
    return this.print();
  }
  get(index) {
    if (!this.head || index >= this.length || index < 0 || !index)
      return undefined;
    let curr = this.head;
    while (index--) {
      curr = curr.next;
    }
    return curr;
  }
  set(index, val) {
    if (!this.head || index >= this.length || index < 0 || !val || isNaN(index))
      return undefined;
    let item = this.get(index);
    item.val = val;
    return item;
  }
  insert(index, val) {
    const node = new Node(val);
    if (index > this.length || !val || isNaN(index)) return undefined;
    if (index === this.length) return this.push(val);
    let pre = this.head;
    let cur = pre.next;
    while (index--) {
      pre = cur;
      cur = cur.next;
    }
    pre.next = node;
    node.next = cur;
    this.length++;
    return this.print();
  }
  delete(index) {
    if (!this.head || index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let pre = this.head;
    let cur = this.head;
    while (index--) {
      pre = cur;
      cur = pre.next;
    }
    pre.next = cur.next;
    return this;
  }
  reverse() {
    if (!this.head) return undefined;
    if (this.length === 1) return this.print();
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let nxt;
    let prev = null;
    // start.next = null;
    while (node) {
      nxt = node.next;
      node.next = prev;
      prev = node;
      node = nxt;
    }
    return this.print();
  }
}
