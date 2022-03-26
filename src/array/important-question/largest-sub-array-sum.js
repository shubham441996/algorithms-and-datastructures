function largestSubArraySum(arr) {
  let hash = {};
  let maxLen = 0;
  let prefixSum = 0;
  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];
    index = hash[prefixSum];
    if (prefixSum == 0) {
      maxLen = i + 1;
    } else {
      if (index !== undefined) {
        maxLen = Math.max(maxLen, i - index);
      } else {
        hash[prefixSum] = i;
      }
    }
  }
  return maxLen;
}

let input = [1, 3, -5, 6, -2];
let result = largestSubArraySum(input);
console.log(result);
