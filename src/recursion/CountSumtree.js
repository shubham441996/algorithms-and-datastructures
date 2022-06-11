class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

let count = 0;
let ptr;

// Utility function to count subtrees that
// sum up to a given value x
function countSubtreesWithSumXUtil(root, x) {
  let l = 0,
    r = 0;
  if (root == null) return 0;
  l += countSubtreesWithSumXUtil(root.left, x);
  r += countSubtreesWithSumXUtil(root.right, x);
  if (l + r + root.data == x) count++;
  if (ptr != root) return l + root.data + r;
  return count;
}

/* binary tree creation
       5
      / \
      -10 3
      / \ / \
      9 8 -4 7
      */
let root = new Node(5);
root.left = new Node(-10);
root.right = new Node(3);
root.left.left = new Node(9);
root.left.right = new Node(8);
root.right.left = new Node(-4);
root.right.right = new Node(7);
let x = 7;
ptr = root; // assigning global value of ptr
console.log("Count = " + countSubtreesWithSumXUtil(root, x));
