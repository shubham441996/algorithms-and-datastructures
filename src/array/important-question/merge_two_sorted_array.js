function mergeTwoSortedArray(input1, input2) {
  for (let i = 0; i < input1.length; i++) {
    if (input1[i] > input2[0]) {
      [input1[i], input2[0]] = [input2[0], input1[i]];
      sort(input2);
    }
  }
  return input1.concat(input2);

  function sort(input2) {
    for (let i = 1; i < input2.length; i++) {
      let key = input2[i];
      let j = i - 1;
      while (input2[j] > key && j >= 0) {
        input2[j + 1] = input2[j];
        j--;
      }
      input2[j + 1] = key;
    }
  }
}

function gapAlgorithm(input1, input2) {
  input1 = input1.concat(input2);
  let gap = Math.floor(input1.length / 2);
  while (true) {
    for (let i = 0; i < input1.length; i++) {
      if (input1[i] && input1[i + gap]) {
        if (input1[i + gap] < input1[i]) {
          [input1[i], input1[i + gap]] = [input1[i + gap], input1[i]];
        }
      } else {
        break;
      }
    }
    if (gap === 1) {
      break;
    }
    gap = Math.floor(gap / 2);
  }
  return input1;
}
let firstArr = [1, 4, 8, 10, 19];
let secondArr = [2, 3, 9, 13];
let result = gapAlgorithm(firstArr, secondArr);
console.log(result);
