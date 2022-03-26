function sumFourNumbers(arr, target) {
  let result = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let left = j + 1;
      let right = arr.length - 1;
      let target1 = arr[i] + arr[j];
      let resultSum = target - target1;
      while (left < right) {
        if (arr[left] + arr[right] < resultSum) {
          left++;
        } else if (arr[left] + arr[right] > resultSum) {
          right--;
        } else {
          result.push([arr[i], arr[j], arr[left], arr[right]]);
          left++;
        }
      }
    }
  }
  return result;
}
function multiDimensionalUnique(arr) {
  var uniques = [];
  var itemsFound = {};
  for (var i = 0, l = arr.length; i < l; i++) {
    var stringified = JSON.stringify(arr[i]);
    if (itemsFound[stringified]) {
      continue;
    }
    uniques.push(arr[i]);
    itemsFound[stringified] = true;
  }
  return uniques;
}
let input = [1, 0, -1, 0, -2, 2];
let result = multiDimensionalUnique(sumFourNumbers(input, 0));
console.log(result);
