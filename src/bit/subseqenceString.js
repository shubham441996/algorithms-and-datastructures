function getAllSubsequence(str) {
  let result = [];
  let len = str.length;
  let cases = Math.pow(2, len);
  for (let i = 0; i < cases; i++) {
    let binaryValue = i.toString(2);
    if (binaryValue.length < len) {
      let tempStr = "";
      for (let j = 0; j < len - binaryValue.length; j++) {
        tempStr += "0";
      }
      binaryValue = tempStr.concat(binaryValue);
    }
    let resString = "";
    for (let j = 0; j < len; j++) {
      if (Number(binaryValue[j])) {
        resString += str[j];
      }
    }
    result.push(resString);
  }
  return result;
}

let result = getAllSubsequence("ABCD").sort();
console.log(result);
