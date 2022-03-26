let input = [
  //   [1, 1, 1],
  //   [1, 0, 1],
  //   [1, 1, 1],
];
input = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
// BruteForce
setMatrixZeroBetter(input);
function setMatrixZero(array = [[]]) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 0) {
        setRowsColumn(array, i, j);
      }
    }
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === -1) {
        array[i][j] = 0;
      }
    }
  }
  console.log(array);
}

function setRowsColumn(array, i, j) {
  for (let k = 0; k < array.length; k++) {
    array[k][j] = -1;
  }
  for (let l = 0; l < array.length; l++) {
    array[i][l] = -1;
  }
}
//

// Better Solution

function setMatrixZeroBetter(array = [[]]) {
  let rows = [];
  let column = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 0) {
        rows[i] = 0;
        column[j] = 0;
      }
    }
  }
  console.log(rows, column);
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (column[j] == 0 || rows[i] == 0) {
        array[i][j] = 0;
      }
    }
  }
  console.log(array);
}
