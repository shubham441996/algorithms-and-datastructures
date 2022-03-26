const SinglyLinkedList = require("../day6/singlylinklist");

let list1 = new SinglyLinkedList();
let list2 = new SinglyLinkedList();

list1.createLinkedListFromArray([9, 9, 9, 9, 9, 9, 9]);
list2.createLinkedListFromArray([9, 9, 9, 9]);

function addLinkedList(list1, list2) {
  let carry = 0;
  let resultList = new SinglyLinkedList();
  let currentList1 = list1.head;
  let currentList2 = list2.head;
  while (currentList1 && currentList2) {
    console.log(currentList1.data, currentList2.data);
    let data = currentList1.data + currentList2.data + carry;
    carry = 0;
    if (data > 9) {
      data = data % 10;
      carry = 1;
    }
    resultList.addNodeAtLast(data);
    currentList1 = currentList1.next;
    currentList2 = currentList2.next;
  }
  while (currentList1) {
    let data = currentList1.data + carry;
    carry = 0;
    if (data > 9) {
      data = data % 10;
      carry = 1;
    }
    resultList.addNodeAtLast(data);
    currentList1 = currentList1.next;
  }
  while (currentList2) {
    let data = currentList2.data + carry;
    carry = 0;
    if (data > 9) {
      data = data % 10;
      carry = 1;
    }
    resultList.addNodeAtLast(data);
    currentList2 = currentList2.next;
  }
  if (carry) {
    resultList.addNodeAtLast(carry);
  }
  console.log(resultList.print());
}

addLinkedList(list1, list2);
