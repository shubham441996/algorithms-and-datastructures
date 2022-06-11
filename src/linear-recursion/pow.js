function pow(a, b) {
  let res = 1;
  while (b) {
    if (b & 1) {
      res *= a;
    }
    a *= a;
    b >>= 1;
  }
  return res;
}
let result = pow(2, 5,10);
console.log(result);
