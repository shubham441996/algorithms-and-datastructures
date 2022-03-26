const SinglyLinkedList = require("./singlylinklist");
const Node = require("./node");
function reverseLinkedListByN(list, n) {
  let tempCurrent = list;
  let count = 0;
  let current = list.head;
  let next = current.next;
  let dummyNode = new Node(0);
  dummyNode.next = list.head;
  let prev = dummyNode;
  while (tempCurrent) {
    count++;
    tempCurrent = tempCurrent.next;
  }
  while (count >= n) {
    current.next = prev;
    next = current.next;
    for (let i = 1; i < k; i++) {
      current.next = next.next;
      next.next = prev.next;
      prev.next = next;
      next = current.next;
    }
    prev = current;
    length -= k;
  }
  return dummyNode.next;
}

let list = new SinglyLinkedList();
list.createLinkedListFromArray([1, 2, 3, 4, 5, 6, 7, 8]);
reverseLinkedListByN(list, 3);
list.print();
