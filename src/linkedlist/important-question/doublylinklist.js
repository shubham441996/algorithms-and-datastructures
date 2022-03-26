class Node {
  constructor(data) {
    this.prev = null;
    this.next = null;
    this.data = data;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  print() {
    let curr = this.head;
    let arr = [];
    while (curr) {
      arr.push(curr.data);
      curr = curr.next;
    }
    console.log(arr.join("->"));
  }
  addNodeIfListIsEmpty(data) {
    let node = new Node(data);
    this.head = node;
    this.tail = node;
  }
  addNodeInLast(data) {
    let node = new Node(data);
    if (!(this.head && this.tail)) {
      this.addNodeIfListIsEmpty(data);
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  }
  addNodeInFirst(data) {
    let node = new Node(data);
    if (!(this.head && this.tail)) {
      this.addNodeIfListIsEmpty(data);
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
}
let list = new DoublyLinkedList();
list.addNodeInLast(10);
list.addNodeInLast(20);
list.addNodeInLast(30);
list.addNodeInLast(40);
list.addNodeInLast(50);
list.addNodeInLast(60);
list.addNodeInFirst(5);
list.addNodeInFirst(4);
list.addNodeInLast(70);

list.print();
