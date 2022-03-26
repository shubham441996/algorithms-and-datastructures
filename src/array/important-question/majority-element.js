function majorityElement(input) {
  let count = 0;
  let element = 0;
  for (let i = 0; i < input.length; i++) {
    if (count === 0) {
      element = input[i];
    }
    if (element === input[i]) {
      count++;
    } else {
      count--;
    }
  }
  return element;
}
let input = [4, 4, 2, 4, 3, 4, 4, 3, 2, 4]; //->n/2
let result = majorityElement(input);
console.log(result);
