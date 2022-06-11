function jumpSearch(arr, key) {
  let len = arr.length;
  let jumpBlock = Math.floor(Math.sqrt(len));
  let prevIndex = 0;
  let nextIndex = jumpBlock;
  while (nextIndex < len) {
    if (arr[nextIndex] > key) {
      break;
    }
    prevIndex = nextIndex;
    nextIndex = Math.min(jumpBlock + nextIndex, len);
  }
  while (prevIndex <= nextIndex) {
    if (arr[prevIndex] === key) {
      return prevIndex;
    }
    prevIndex++;
  }
  return -1;
}

let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(jumpSearch(input, 1));
