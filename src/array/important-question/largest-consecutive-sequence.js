function largestCommonSequence(arr) {
  // Step1 - Set Declare to remove duplicates
  let set = new Set();
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    set.add(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    let arrCount = 1;
    if (!set.has(ele - 1)) {
      let currentEle = ele;
      while (set.has(currentEle + 1)) {
        arrCount += 1;
        currentEle += 1;
        console.log(currentEle);
      }
      count = Math.max(count, arrCount);
    }
  }
  return count;
}
let input = [100, 200, 1, 203, 3, 204, 2, 202, 4, 199, 201];
const result = largestCommonSequence(input);
console.log(result);
