/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
	if (!root) return [];
	let arr = []; // 暂存每层数据
	let res = []; // 存储每层最后一个数据
	arr.push(root);
	while (arr.length > 0) {
		res.push(arr[arr.length - 1].val); //将每层最后一个数据存入数组
		let len = arr.length;
		while (len > 0) {
			let now = arr.shift();
			if (now.left != null) arr.push(now.left);
			if (now.right != null) arr.push(now.right);
			len--;
		}
	}
	return res;
};
