/**
 * 453. 最小操作次数使数组元素相等
 * 思路：看反面，不考虑最后的数组，n-1个数字都加一，等同于剩余的一个数字减一，求最小操作次数，即求所有数字到最小数字的差求和。
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
	const min = Math.min(...nums);
	let cnt = 0;
	for (let i = 0; i < nums.length; i++) {
		cnt += nums[i] - min;
	}
	return cnt;
};
