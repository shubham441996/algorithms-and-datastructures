class BitManipulation {
  leftShift(n, k) {
    return n << k;
  }
  rightShift(n, k) {
    return n >> k;
  }
  isEven(n) {
    // Last bit should be 0 for even numbers
    // Last bit should be 1 for odd numbers
    return (n & 1) === 1 ? false : true;
  }
  getBitAtIndex(n, index) {
    let temp = n >> (index - 1);
    // console.log(temp.toString(2));
    return (temp & 1) === 1 ? 1 : 0;
  }
  clearBitAtIndex(n, index) {
    let temp = ~(1 << index);
    return temp & n;
  }
  updateBitAtIndex(n, index, val) {
    let res = this.clearBitAtIndex(n, index);
    let mask = val << index;
    return res | mask;
  }
  clearLastBitAtIndex(n, index) {
    let mask = ~1 << (index - 1);
    // console.log(mask.toString(2), n.toString(2));
    return mask & n;
  }
  clearRangeOfBits(n, start, end) {
    let mask = ~((Math.pow(2, end - start + 1) - 1) << start);
    console.log(mask.toString(2), n.toString(2));
    return mask & n;
  }
  isPowerOf2(n) {
    return (n & (n - 1)) === 0;
  }
  isPowerOf4(n) {
    if (n && !(n & (n - 1))) {
      let count = 0;
      while (n > 1) {
        n >>= 1;
        count++;
      }
      if (count % 2) {
        return false;
      }
      return true;
    }
    return false;
  }
  countSetBits(n) {
    let count = 0;
    while (n) {
      if (n & 1) {
        count++;
      }
      n >>= 1;
    }
    return count;
  }
  convertToBinary(n) {
    console.log(`binary no of ${n} is:`);
    let pow = 0;
    let decimalNo = 0;
    while (n) {
      let val = n & 1;
      n >>= 1;
      console.log(val);
      decimalNo += Math.pow(10, pow) * val;
      pow++;
    }
    return decimalNo;
  }
  hammingDistance(n1, n2) {
    let result = n1 ^ n2;
    let start = -1;
    let end = 0;
    let count = 0;
    while (result) {
      if (result & 1) {
        if (start === -1) {
          start = count;
          end = count;
        } else {
          end = count;
        }
      }
      result >>= 1;
      count++;
    }
    return [start, end];
  }
  uniqueNoI(arr) {
    // Case where only one Number is unique rest are duplicates...
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      result ^= arr[i];
    }
    return result;
  }

  uniqueNoII(arr) {
    // Case where Two Number is unique rest are duplicates...
    let result = 0;
    let firstGroup = [];
    for (let i = 0; i < arr.length; i++) {
      result ^= arr[i];
    }
    let pos = 0;
    let temp = result;
    while (temp) {
      if (temp & 1) {
        break;
      }
      temp >>= 1;
      pos++;
    }
    console.log(pos, result.toString(2));
    let a = 0;
    firstGroup = arr.filter((ele) => {
      console.log(ele.toString(2), ele);
      return this.getBitAtIndex(ele, pos + 1);
    });
    console.log(firstGroup);
    for (let i = 0; i < firstGroup.length; i++) {
      a ^= firstGroup[i];
    }
    return [a, a ^ result];
  }

  uniqueNoIII(arr) {
    // Case where duplicate no repeat three times
    let result = [];
    for (let i = 0; i < 32; i++) {
      let bit = 0;
      for (let j = 0; j < arr.length; j++) {
        bit += this.getBitAtIndex(arr[i], i + 1);
      }
      result.push(bit);
    }
    let number = result.reverse().map((ele) => ele % 3);
    console.log(number);
    return number;
  }
}
//  1 1 1 1 1 1 1

let bitManipulation = new BitManipulation();
let resultLeftShift = bitManipulation.leftShift(4, 1);
console.log("Left Shift Result of 4 is:", resultLeftShift);
let resultRightShift = bitManipulation.rightShift(4, 1);
console.log("Right Shift Result 4 is:", resultRightShift);

let isEven = bitManipulation.isEven(20);
console.log("Is Even number:", isEven);
let bitAtIndex = bitManipulation.getBitAtIndex(4, 3);
console.log("Is Bit at index:", bitAtIndex);
let clearBitAtIndex = bitManipulation.clearBitAtIndex(15, 3);
console.log("Clear Bit at index:", clearBitAtIndex);
let updatedBitAtIndex = bitManipulation.updateBitAtIndex(15, 0, 0);
console.log("Updated Bit at index:", updatedBitAtIndex.toString(2));
let clearLastBitAtIndex = bitManipulation.clearLastBitAtIndex(15, 4);
console.log("Clear Last Bit at index:", clearLastBitAtIndex.toString(2));
let clearRangeOfBitsRes = bitManipulation.clearRangeOfBits(63, 0, 1);
console.log("clearRangeOfBitsRes :", clearRangeOfBitsRes.toString(2));
let isPowerOf2Res = bitManipulation.isPowerOf2(34);
console.log("Is PowerOf 2 :", isPowerOf2Res);
let isPowerOf4Res = bitManipulation.isPowerOf4(32);
console.log("Is PowerOf 4 :", isPowerOf4Res);
let resCountBits = bitManipulation.countSetBits(3);
console.log("Count bits are :", resCountBits);
let binaryNo = bitManipulation.convertToBinary(15);
console.log(binaryNo);

let hammingDistanceResult = bitManipulation.hammingDistance(1, 12);
console.log(hammingDistanceResult);

let uniqueNoIRes = bitManipulation.uniqueNoI([5, 4, 3, 2, 1, 2, 3, 4, 5]);
console.log("Unique No1 Is", uniqueNoIRes);

let uniqueNoIIRes = bitManipulation.uniqueNoII([5, 4, 3, 2, 1, 9, 2, 3, 4, 5]);
console.log("Unique No1I Is", uniqueNoIIRes);

let uniqueNoIIIRes = bitManipulation.uniqueNoIII([
  5, 4, 3, 2, 1, 2, 3, 4, 5, 2, 3, 4, 5,
]);
console.log("Unique NoIII Is", uniqueNoIIIRes);
