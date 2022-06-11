class Solution {
  //Function to check if two arrays are equal or not.
  check(A, B, N) {
    let map = new Map();
    for (let i = 0; i < A.length; i++) {
      if (map.has(A[i])) {
        map.set(A[i], map.get(A[i]) + 1);
      } else {
        map.set(A[i], 1);
      }
    }
    // console.log(Array.from(map.keys()).sort((a, b) => a - b));
    for (let i = 0; i < B.length; i++) {
      if (map.has(B[i])) {
        // console.log(B[i]);
        if (map.get(B[i]) > 0) {
          map.set(B[i], map.get(B[i]) - 1);
        } else {
          //console.log(B[i], "Not Found");
          // console.log();
          return false;
        }
      } else {
        return false;
      }
    }
    for (let [_, value] of map.entries()) {
      if (value) {
        return false;
      }
    }
    return true;
  }
}

let N = 37;
let A = [
  445, 627, 523, 466, 709, 417, 283, 259, 925, 638, 63, 625, 601, 37, 453, 900,
  380, 551, 469, 72, 974, 132, 882, 931, 934, 895, 661, 164, 200, 982, 900, 997,
  960, 774, 814, 669, 191,
];
let B = [
  709, 900, 469, 37, 283, 417, 259, 132, 974, 814, 551, 466, 982, 627, 63, 669,
  934, 625, 661, 960, 601, 380, 523, 200, 900, 191, 895, 774, 72, 997, 638, 931,
  445, 925, 453, 164, 882,
];
let solution = new Solution();
let res = solution.check(A, B, N);
console.log(res);
