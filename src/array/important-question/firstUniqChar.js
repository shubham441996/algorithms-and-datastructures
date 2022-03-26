function firstUniqChar(str) {
  function bootForce() {
    let isValid = true;
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j]) {
          isValid = false;
          break;
        }
      }
      if (isValid) {
        return i;
      }
    }
    return -1;
  }
  function optimal() {
    let map = {};
    for (let i = 0; i < str.length; i++) {
      if (map[str[i]]) {
        map[str[i]]++;
      } else {
        map[str[i]] = 1;
      }
    }
    for (let i = 0; i < str.length; i++) {
      if (map[str[i]] === 1) {
        return i;
      }
    }
    return -1;
  }
  let result1 = bootForce();
  let result2 = optimal();
  console.log(
    "Both Approach is Correct= ",
    result1 == result2,
    "Solution is =",
    result1,
    result2
  );
  return result1;
}
let input = "aabb";
let result = firstUniqChar(input);
console.log(result);
