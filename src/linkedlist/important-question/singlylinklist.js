const Node = require("./node");

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  addNodeAtLast(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
  addNodeAtFirst(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
  getNode(index) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      if (index === count) {
        console.log(count, currentNode.data);
        return currentNode;
      }
      count++;
      currentNode = currentNode.next;
    }
    return null;
  }

  addNodeAtIndex(data, index) {
    let node = new Node(data);
    // 1 2 3 4 5
    let current = this.getNode(index - 1);
    if (current) {
      node.next = current.next;
      current.next = node;
    }
  }
  print() {
    let str = "";
    let current = this.head;
    while (current) {
      str += current.data + "->";
      current = current.next;
    }
    console.log(str);
  }

  findMiddleNode() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  reverse() {
    let current = this.head;
    let prev = null;
    let next = current.next;
    while (current) {
      current.next = prev;
      prev = current;
      current = next;
      if (current) {
        next = current.next;
      } else {
        this.head = prev;
      }
    }
  }
  createLinkedListFromArray(list) {
    if (!this.head) {
      let node = new Node(list[0]);
      this.head = node;
    }
    let current = this.head;
    for (let i = 1; i < list.length; i++) {
      let node = new Node(list[i]);
      current.next = node;
      current = current.next;
    }
    return this.head;
  }
  removeNNodeFromEndOfList(n) {
    let fast = this.head;
    let slow = this.head;
    for (let i = 0; i < n; i++) {
      fast = fast.next;
    }
    while (fast.next) {
      slow = slow.next;
      fast = fast.next;
    }
    console.log(slow);
    slow.next = slow.next.next;
  }
}
module.exports = SinglyLinkedList;
// let list = new SinglyLinkedList();
// list.addNodeAtLast(1);
// list.addNodeAtLast(2);
// list.addNodeAtLast(3);
// list.addNodeAtLast(4);
// list.addNodeAtLast(5);
// // list.addNodeAtLast(6);
// list.addNodeAtFirst(0);
// console.log(list.print());
// console.log(list.findMiddleNode());
// list.reverse();
// console.log(list.print());
// console.log(list.findMiddleNode());
// list.createLinkedListFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
// console.log(list.print());
// list.removeNNodeFromEndOfList(5);
// list.print();
