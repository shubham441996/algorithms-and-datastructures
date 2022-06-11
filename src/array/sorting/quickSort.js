function quickSort(arr, start, end) {
  if (start < end) {
    const partitionindex = partition(arr, start, end);
    quickSort(arr, start, partitionindex - 1);
    quickSort(arr, partitionindex + 1, end);
  }
  return;
}

function partition(arr, start, end) {
  let partitionIndex = start;
  let pivot = arr[end];
  for (let i = start; i <= end; i++) {
    if (pivot > arr[i]) {
      [arr[partitionIndex], arr[i]] = [arr[i], arr[partitionIndex]];
      partitionIndex++;
    }
  }
  [arr[partitionIndex], arr[end]] = [arr[end], arr[partitionIndex]];
  return partitionIndex;
}
const input = [1, 4, 7, 9, 10, 3, 5, 2];
quickSort(input, 0, input.length - 1);
console.log(input);
