/**
 * 598. 范围求和 II
 * 思路：求交集
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
	for (let i = 0; i < ops.length; i++) {
		m = Math.min(ops[i][0], m);
		n = Math.min(ops[i][1], n);
	}
	return m * n;
};
console.log(
	maxCount(3, 3, [
		[2, 2],
		[3, 3],
	])
);
