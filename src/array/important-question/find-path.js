function findPath(i, j, row, column) {
  if (row - 1 === i && column - 1 === j) {
    return 1;
  }
  if (i >= row || j >= column) {
    return 0;
  } else {
    return findPath(i + 1, j, row, column) + findPath(i, j + 1, row, column);
  }
}
let input = findPath(0, 0, 3, 7);
console.log(input);
