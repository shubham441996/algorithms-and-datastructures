function kadanesAlgo(arr) {
  let maxSum = arr[0];
  let tempSum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    tempSum += arr[i];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
    if (tempSum < 0) {
      tempSum = 0;
    }
  }
  return maxSum;
}
let result = kadanesAlgo([-2, -3, 4, -1, -2, 1, 5, -3]);
console.log(result);
