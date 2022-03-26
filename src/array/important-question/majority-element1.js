function majorityElement(elements) {
  let c1 = 0;
  let c2 = 0;
  let ele1 = -1;
  let ele2 = -1;
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] === ele1) {
      c1++;
    } else if (elements[i] === ele2) {
      c2++;
    } else if (c1 === 0) {
      ele1 = elements[i];
      c1 = 1;
    } else if (c2 === 0) {
      ele2 = elements[i];
      c2 = 1;
    } else {
      c1--;
      c2--;
    }
  }
  return [ele1, ele2];
}
let input = [1, 1, 1, 3, 3, 3, 2, 2];
let result = majorityElement(input);
console.log(result);
