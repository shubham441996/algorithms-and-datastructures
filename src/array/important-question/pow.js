function pow(x, n) {
  let ans = 1.0;
  let nn = n;
  if (nn < 0) nn *= -1;
  while (nn > 0) {
    if (nn % 2 === 1) {
      ans *= x;
      nn -= 1;
    } else {
      x = x * x;
      nn /= 2;
    }
  }
  if (n < 0) {
    return 1 / ans;
  } else {
    return ans;
  }
}

let result = pow(2, 10);
console.log(result);
