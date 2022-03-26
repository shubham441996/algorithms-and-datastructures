function countInversionArray(arr, start, end) {
  let inversionCount = 0;
  let mid = 0;
  if (start < end) {
    mid = Math.trunc((start + end) / 2);
    inversionCount += countInversionArray(arr, start, mid);
    inversionCount += countInversionArray(arr, mid + 1, end);
    inversionCount += mergeTwoSortedArray(arr, start, mid, end);
  }
  return inversionCount;
  function mergeTwoSortedArray(arr, lowerIndex, midIndex, higherIndex) {
    let leftArray = [];
    let rightArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
    let inversionCount = 0;
    for (let i = lowerIndex; i <= midIndex; i++) {
      leftArray.push(arr[i]);
    }
    for (let i = midIndex + 1; i <= higherIndex; i++) {
      rightArray.push(arr[i]);
    }
    let n1 = leftArray.length;
    let n2 = rightArray.length;
    let k = lowerIndex;
    while (leftIndex < n1 && rightIndex < n2) {
      if (leftArray[leftIndex] <= rightArray[rightIndex]) {
        arr[k] = leftArray[leftIndex];
        leftIndex++;
      } else {
        inversionCount += midIndex + 1 - (leftIndex + lowerIndex);
        arr[k] = rightArray[rightIndex];
        rightIndex++;
      }
      k++;
    }
    while (leftIndex < n1) {
      arr[k] = leftArray[leftIndex];
      leftIndex++;
      k++;
    }

    /* Copy remaining elements of R[] if any */
    while (rightIndex < n2) {
      arr[k] = rightArray[rightIndex];
      rightIndex++;
      k++;
    }
    return inversionCount;
  }
}
let input = [1, 20, 6, 4, 5];
let result = countInversionArray(input, 0, input.length - 1);
console.log(result, input);
