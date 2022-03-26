function nextPermutation(arr) {
  let index = -1;
  for (let i = arr.length - 1; i > 1; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        index = j;
        break;
      }
    }
    if (index > -1) {
      break;
    }
  }
  sortElement(arr, index + 1);
  return arr;
}
function sortElement(arr, index) {
  for (let i = index; i < arr.length; i++) {
    for (let j = index; j < arr.length; j++) {
      if (arr[j + 1] !== undefined && arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
}
let input = [3, 2, 1];
console.log(nextPermutation(input));
