function longestSubstring(str) {
  let hash = {};
  let count = 0;
  let maxCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]]) {
      hash[str[i]]++;
      count = 1;
    } else {
      count++;
      hash[str[i]] = 1;
    }
    maxCount = Math.max(maxCount, count);
  }
  return maxCount;
}

let input = "takeUforward";
let result = longestSubstring(input);
console.log(result);
