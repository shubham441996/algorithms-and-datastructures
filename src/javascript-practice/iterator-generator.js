function makeIterator(start = 0, end, step = 1) {
  // Two properties inside this function
  //  1. value
  //  2. next
  let iterationCount = 0;
  let initialIndex = start;
  const range = {
    next: function () {
      let result = {};
      if (initialIndex < end) {
        result = { value: initialIndex, done: false };
        initialIndex += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    },
  };
  return range;
}

function* makeGenerator(start = 0, end, step = 1) {
  let iterationCount = 0;
  for (let i = start; i < end; i += step) {
    iterationCount++;
    yield i;
  }
  return iterationCount;
}

let iterator = makeGenerator(0, 10, 2);
console.log(iterator.next());
console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
