/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  let hash = new Map();
  return find(root, k, hash);
};
var find = (root, k, hash) => {
  if (root == null) {
    return false;
  }
  if (hash.has(k - root.val)) {
    return true;
  }
  hash.set(root.val);
  console.log(root.left, root.right);
  return find(root.left, k, hash) || find(root.right, k, hash);
};

const resp = findTarget([5, 3, 6, 2, 4, null, 7], 9);
console.log("resp", resp);
