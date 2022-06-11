function recursive(n) {
  if (n === 0) {
    return 0;
  }
  return n + recursive(n - 1);
}

let result = recursive(4);
console.log(result);

function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function fibonacci(n) {
  if (n == 1 || n == 0) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5));

function product(arr, n) {
  if (n == -1) {
    return 1;
  }
  return arr[n] * product(arr, n - 1);
}

console.log(product([1, 2, 3, 4], 3));
