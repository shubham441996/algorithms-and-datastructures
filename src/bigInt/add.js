function add(n1, n2) {
  let arr1 = n1.split("").map(Number).reverse();
  let arr2 = n2.split("").map(Number).reverse();
  let arr3 = [];
  let n = Math.max(arr1.length, arr2.length);
  let carry = 0;
  let i = 0;
  for (; i < n; i++) {
    if (arr1[i] != undefined && arr2[i] !== undefined) {
      let val = arr1[i] + arr2[i] + carry;
      if (val > 9) {
        carry = 1;
      } else {
        carry = 0;
      }
      arr3[i] = val % 10;
    }
  }
  while (i < arr1.length) {
    let val = arr1[i] + carry;
    if (val > 9) {
      carry = 1;
    } else {
      carry = 0;
    }
    arr3[i] = val % 10;
    i++;
  }
  while (i < arr2.length) {
    let val = arr2[i] + carry;
    if (val > 9) {
      carry = 1;
    } else {
      carry = 0;
    }
    arr3[i] = val % 10;
    i++;
  }
  if (carry) {
    arr3.push(carry);
  }
  return arr3.reverse().join();
}
let result = add("1234", "9934");
console.log(result);
