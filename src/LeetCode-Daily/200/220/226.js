/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 226. 翻转二叉树
 * 思路 1：递归
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
	if (root === null) {
		return null;
	}
	const temp = root.left;
	root.left = root.right;
	root.right = temp;
	invertTree(root.left);
	invertTree(root.right);
	return root;
};
console.log(invertTree([4, 2, 7, 1, 3, 6, 9]));
