/**
 * 414. 第三大的数
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
	nums = Array.from(new Set(nums.sort((a, b) => a - b)));
	if (nums.length < 3) {
		return Math.max(...nums);
	} else {
		return nums.slice(-3)[0];
	}
};
console.log(thirdMax([2, 2, 3, 1]));
