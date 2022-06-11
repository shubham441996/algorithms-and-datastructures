function julka(n, k) {
  // N is the Number of Apple
  // K is the apple extra between two girls
  //   let x= (N-K)/2
  let arr1 = n.split("").map(Number).reverse();
  let arr2 = k.split("").map(Number).reverse();
  console.log(arr1, arr2);
  let arr3 = [];
  let carry = 0;
  let i = 0;
  while (i < arr1.length && i < arr2.length) {
    if (arr1[i] > arr2[i] + carry) {
      arr3[i] = arr1[i] - arr2[i] + carry;
      carry = 0;
    } else {
      let val = 10 + arr1[i];
      arr3[i] = val - arr2[i] + carry;
      carry = -1;
    }
    i++;
  }
  while (i < arr1.length) {
    if (arr1[i] >= arr1[i] + carry) {
      arr3[i] = arr1[i] + carry;
    } else {
      let val = 10 + arr1[i];
      arr3[i] = val + carry;
      carry = -1;
    }
    i++;
  }
  return arr3;
}
let result = julka(String(12342), String(19));
console.log(result);
