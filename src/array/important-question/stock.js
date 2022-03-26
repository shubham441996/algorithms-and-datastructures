function buySellStock(arr) {
  let purchaseValue = Number.MAX_VALUE;
  let sellValue = 0;
  for (let i = 0; i < arr.length; i++) {
    purchaseValue = Math.min(purchaseValue, arr[i]);
    sellValue = Math.max(sellValue, arr[i] - purchaseValue);
  }
  return sellValue;
}
let input = [5, 6, 4, 3, 1];
result = buySellStock(input);
console.log(result);
