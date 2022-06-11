// This Algorithm will be great when we are sorting smallestElement to its location.

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallestIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smallestIndex] > arr[j]) {
        smallestIndex = j;
      }
    }
    [arr[smallestIndex], arr[i]] = [arr[i], arr[smallestIndex]];
  }
  return arr;
}

let input = [10, 4, 2, 1, 6, 7, 5, 11, 9];
console.log(selectionSort(input));
