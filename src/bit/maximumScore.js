function maximumScore(input) {
  // First find the row which needs to be changed
  for (let i = 0; i < input.length; i++) {
    if (!input[i][0]) {
      for (let j = 0; j < input[i].length; j++) {
        input[i][j] = input[i][j] === 1 ? 0 : 1;
      }
    }
  }
  //Now Check for columns
  for (let column = 1; column < input[0].length; column++) {
    let count = 0;
    for (let row = 0; row < input.length; row++) {
      if (input[row][column]) {
        count++;
      }
    }
    if (count <= Math.floor(input.length / 2)) {
      for (let row = 0; row < input.length; row++) {
        input[row][column] = input[row][column] === 1 ? 0 : 1;
      }
    }
  }
  let sum = input.reduce((a, b) => {
    let val = b.join("");
    a += parseInt(val, 2);
    return a;
  }, 0);

  return sum;
}
let input = [
  [0, 0, 1, 1],
  [1, 0, 1, 0],
  [1, 1, 0, 0],
];
let result = maximumScore(input);
console.log(result);
