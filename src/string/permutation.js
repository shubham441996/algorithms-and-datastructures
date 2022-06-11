let result = [];
function permute(str, l, r) {
  if (l == r) result.push(str);
  else {
    for (let i = l; i <= r; i++) {
      str = swap(str, l, i);
      permute(str, l + 1, r);
      str = swap(str, l, i);
    }
  }
}

function swap(a, i, j) {
  let temp;
  let charArray = a.split("");
  temp = charArray[i];
  charArray[i] = charArray[j];
  charArray[j] = temp;
  return charArray.join("");
}

let str = "ABC";
let n = str.length;
permute(str, 0, n - 1);
console.log(result);
