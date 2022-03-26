var getIntersectionNode = function (headA, headB) {
  let currentA = headA;
  let currentB = headB;
  function getLength(head) {
    let temphead = head;
    let count = 0;
    while (temphead) {
      count++;
      temphead = temphead.next;
    }
    return count;
  }
  function findInterSection(head1, head2) {
    let tempHead1 = head1;
    let tempHead2 = head2;
    while (tempHead1 && tempHead2) {
      if (tempHead1 === tempHead2) {
        return tempHead1;
      }
      tempHead1 = tempHead1.next;
      tempHead2 = tempHead2.next;
    }
    return null;
  }
  let len1 = getLength(headA);
  let len2 = getLength(headB);
  if (len1 > len2) {
    let count = len1 - len2;
    while (count--) {
      currentA = currentA.next;
    }
  } else {
    let count = len2 - len1;
    while (count--) {
      currentB = currentB.next;
    }
  }
  return findInterSection(currentA, currentB);
};
