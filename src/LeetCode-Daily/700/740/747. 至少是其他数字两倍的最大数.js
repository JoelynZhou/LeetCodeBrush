/**
 *  * 747. 至少是其他数字两倍的最大数
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
	const n = nums.length;
	if (nums.length === 1) {
		return 0;
	}
	let first = 0,
		second = -1;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] > nums[first]) {
			second = first;
			first = i;
		} else if (nums[i] > nums[second] || second === -1) {
			second = i;
		}
	}
	return nums[first] >= nums[second] * 2 ? first : -1;
};
