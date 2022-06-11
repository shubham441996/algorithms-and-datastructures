function traversal(arr, i, j, row, column, visitedNode) {
  let path = 0;
  if (arr[i][j] === 0) {
    return 1;
  } else {
    const neighbors = [
      [-1, 0],
      [0, -1],
      [0, 1],
      [1, 0],
    ];
    let tempArr = [];
    for (let k = 0; i < neighbors.length; k++) {
      let [rowIndex, columnIndex] = neighbors[k];

      visitedNode[rowIndex][columnIndex] = true;
      if (!visitedNode[rowIndex + i][columnIndex + j]) {
        tempArr[k] = traversal(
          arr,
          rowIndex + i,
          columnIndex + j,
          row,
          column,
          visitedNode
        );
      }
    }
  }
}

function isValidNeighBors(arr, i, j, row, column) {
  if (i <= row && j >= column) {
    return true;
  }
  return false;
}

let input = [
  [1, 1, 1, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 0, 1, 1],
];

let result = traversal(input, 0, 0, 4, 4, [[]]);
