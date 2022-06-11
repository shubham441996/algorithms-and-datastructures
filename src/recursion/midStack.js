class Solution {
  //Function to delete middle element of a stack.
  //   deleteMid(s, sizeOfStack) {
  //     let mid = Math.floor(sizeOfStack / 2);
  //     let count = 0;
  //     function deleteMidRecursion(s, sizeOfStack) {
  //       if (mid < count) {
  //         count--;
  //         return;
  //       }
  //       let temp = s.pop();
  //       count++;
  //       deleteMidRecursion(s, sizeOfStack);
  //       if (mid !== count) {
  //         s.push(temp);
  //         count--;
  //       } else {
  //         count--;
  //       }
  //     }
  //     deleteMidRecursion(s, sizeOfStack);
  //   }
  deleteMid(s, sizeOfStack) {
    function deleteMidRecursion(st, n, curr) {
      // If stack is empty or all items
      // are traversed
      if (st.length == 0 || curr == n) return;

      // Remove current item
      let x = st[st.length - 1];
      st.pop();

      // Remove other items
      deleteMidRecursion(st, n, curr + 1);

      // Put all items back except middle
      if (curr != parseInt(n / 2, 10)) st.push(x);
    }
    deleteMidRecursion(s, sizeOfStack, 0);
  }
}

let solution = new Solution();
s = [1, 2, 3, 6, 7, 4, 5];
solution.deleteMid(s, s.length);
console.log(s);
