function arrayDuplicate(nums) {
  let tortoise = nums[0];
  let hare = nums[tortoise];

  // first phase tortoise will move 1 step at a time and hare will move 2
  while (tortoise !== hare) {
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
  }

  tortoise = 0;

  // In  second phase both will move one step at a time
  while (tortoise !== hare) {
    tortoise = nums[tortoise];
    hare = nums[hare];
  }

  return hare;
}

let input = [1, 3, 4, 2, 2, 5, 6];
let result = arrayDuplicate(input);
console.log(result);
