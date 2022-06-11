//  D C B A
//  0 0 0 0

function travelingSalesManProblem(input, setOfCities, currentCity, n) {
  if (setOfCities === Math.pow(2, n) - 1) {
    return input[currentCity][0];
  }
  let res = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    if ((setOfCities & (1 << i)) === 0) {
      let result =
        input[currentCity][i] +
        travelingSalesManProblem(input, setOfCities | (1 << i), i, n);
      res = Math.min(result, res);
    }
  }
  return res;
}
let input = [
  [0, 20, 42, 25],
  [20, 0, 30, 34],
  [42, 30, 0, 10],
  [25, 34, 10, 0],
];
let n = input.length;
let result = travelingSalesManProblem(input, 1, 0, n);
console.log(result);
