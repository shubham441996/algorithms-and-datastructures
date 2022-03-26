function mergeOverlapping(arr) {
  arr.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < arr.length - 1; i++) {
    let [start, end] = arr[i];
    let [secondStart, secondEnd] = arr[i + 1];
    if (end >= secondStart) {
      console.log(i, arr);
      arr.splice(i, 2, [start, secondEnd > end ? secondEnd : end]);
      i -= 1;
    }
  }
  return arr;
}

let input = [
  [1, 3],
  [2, 4],
  [8, 10],
  [9, 9],
  [15, 18],
];

let result = mergeOverlapping(input);
console.log(result);
