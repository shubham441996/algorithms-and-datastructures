//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} s
 * @returns {number[]}
 */

class Solution {
  //Function to find a continuous sub-array which adds up to a given number.
  subarraySum(arr, n, s) {
    let start = 0;
    let end = 0;
    let sum = 0;
    if (arr.length <= 1) {
      if (s === arr[0]) {
        return [-1];
      }
    } else {
      let i = 0;
      while (start <= end && i < arr.length) {
        sum += arr[i];

        while (sum > s && start < i - 1) {
          sum -= arr[start];
          start++;
        }
        if (sum === s) {
          return [start + 1, end + 1];
        }
        console.log(sum, start, end);
        i++;
        end++;
      }
    }
    return [-1];
  }
}
let s =
  "135 101 170 125 79 159 163 65 106 146 82 28 162 92 196 143 28 37 192 5 103 154 93 183 22 117 119 96 48 127 172 139 70 113 68 100 36 95 104 12 123 134";
let input = s.split(" ").map(Number);
let temp = input.slice("");
let res = new Solution().subarraySum(input, input.length, 468);
console.log(res);
