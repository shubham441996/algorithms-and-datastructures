function sortStack(stack) {
  if (stack.length) {
    let temp = stack.pop();
    sortStack(stack);
    sortedInsert(stack, temp);
  }
}
function sortedInsert(stack, ele) {
  if (!stack.length || ele > stack[stack.length - 1]) {
    stack.push(ele);
  } else {
    let temp = stack.pop();
    sortedInsert(stack, ele);
    stack.push(temp);
  }
}

let input = [-3, 14, 18, -1, -5, 20, 30];
sortStack(input);
console.log(input);
