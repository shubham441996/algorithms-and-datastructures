function sumToNumber(arr, sum) {
  function bruteForce() {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === sum) {
          return [i, j];
        }
      }
    }
  }
  function twoPointer() {
    arr.sort((a, b) => a - b);
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
      if (arr[i] + arr[j] > sum) {
        j--;
      } else if (arr[i] + arr[j] < sum) {
        i++;
      } else {
        return [i, j];
      }
    }
  }

  function hasMapTechnique() {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      console.log(obj);
      if (obj[arr[i]] !== undefined) {
        return [obj[arr[i]], i];
      }
      obj[sum - arr[i]] = i;
    }
  }
  return hasMapTechnique();
}
let input = [2, 7, 11, 15];
let result = sumToNumber(input, 18);
console.log(result);
