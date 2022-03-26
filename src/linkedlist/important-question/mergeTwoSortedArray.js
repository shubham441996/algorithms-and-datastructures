let SinglyLinkedList = require("./singlylinklist");
let list1 = new SinglyLinkedList();
let list2 = new SinglyLinkedList();
list1.createLinkedListFromArray([3, 7, 10]);
list2.createLinkedListFromArray([1, 2, 5, 8, 10]);

var mergeTwoLists = function (l1, l2) {
  let list3 = new SinglyLinkedList();
};
console.log(mergeTwoLists(list1, list2).print());
console.log(list1.print(), list2.print());
