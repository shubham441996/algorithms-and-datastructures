function search2DMatrix(arr, input) {
  let n = arr[0].length;
  let m = arr.length;
  let row = 0;
  let i = 0;
  let j = n - 1;
  while (row < m) {
    let mid = Math.ceil((i + j) / 2);
    if (arr[row][mid] === input) {
      return [row, mid];
    } else if (arr[row][mid] > input) {
      j = mid - 1;
    } else if (arr[row][mid] < input) {
      i = mid + 1;
    }
    if (mid >= n) {
      row++;
      j = n - 1;
      i = 0;
    }
  }
  return [-1, -1];
}

let input = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const result = search2DMatrix(input, 3);
console.log(result);
