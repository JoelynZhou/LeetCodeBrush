/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
	let arr = [];
	if (nums.length <= 1) {
		return nums.length;
	}
	for (let i = 0; (arr[i] = 1), i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[j] < nums[i]) {
				arr[i] = Math.max(arr[i], arr[j] + 1);
			}
		}
	}
	return Math.max(...arr);
};
