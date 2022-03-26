//         *
//       * * *
//     * * * * *
//   * * * * * * *

function pascalTriangleStart(val) {
  let k = 0;
  for (let i = 0; i < val; i++) {
    let str = "";
    for (let j = 0; j < val - i; j++, k = 0) {
      str += " ";
    }
    while (k < i + 1) {
      str += "* ";
      k++;
    }
    console.log(str);
  }
}
pascalTriangle(7, 2);

function pascalTriangle(params, term = 1) {
  let arr = [[]];
  for (let i = 0; i < params; i++) {
    arr[i] = [];
    arr[i][0] = arr[i][i] = term;
    for (let j = 1; j < i; j++) {
      arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
    }
  }
  console.log(arr);
}
