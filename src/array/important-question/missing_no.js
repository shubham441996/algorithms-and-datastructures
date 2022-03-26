function missingNo(input) {
  let len = input.length;
  let sum = (len * (len + 1)) / 2;
  let square = (len * (len + 1) * (2 * len + 1)) / 6;
  let missingNo = 0;
  let repeating = 0;
  for (let i = 0; i < len; i++) {
    sum -= input[i];
    square -= input[i] * input[i];
  }
  missingNo = (sum + square / sum) / 2;
  repeating = missingNo - sum;
  return [missingNo, repeating];
}

let input = [1, 3, 4, 2, 2, 5, 6];
let result = missingNo(input);
console.log(result);
