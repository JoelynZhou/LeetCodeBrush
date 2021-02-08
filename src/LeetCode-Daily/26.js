/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates1 = function(nums) {
	if (nums.length === 0) {
		return;
	}
	let i = 0;
	for (let j = 1; j < nums.length; j++) {
		if (nums[i] !== nums[j]) {
			i++;
			nums[i] = nums[j];
		}
	}
	return i + 1;
};

var removeDuplicates2 = function(nums) {
	if (nums.length === 0) {
		return;
	}
	let i = 0;
	for (let j = 1; j < nums.length; j++) {
		if (nums[i] !== nums[j]) {
			i++;
			if (i !== j) {
				nums[i] = nums[j];
			}
		}
	}
	return i + 1;
};
