function rotateBy90(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i].reverse();
  }
  return arr;
}

let input = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let result = rotateBy90(input);
console.log(result, "*******");
