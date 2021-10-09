/**
 * @param {number[]} nums
 * @return {boolean}
 * 复杂度：O(N)
 */
var checkPossibility = function(nums) {
	// 边界判断
	// 长度为 1，必然成立；长度为 2，必然可以通过修改一个数使之成立；
	if (nums.length < 3) {
		return true;
	}
	let count = 0;
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] > nums[i + 1]) {
			count++;
			// 如果不满足校验，立即退出
			if (count > 1) {
				break;
			}
			/**
             * 当第 i 个数>第 i+1 个数时，
             要么修改 第 i 个数，使得：nums[i]<=nums[i+1]，但如果第 i-1 个数存在，那还要保证 nums[i]>= nums[i-1]，即：nums[i-1]<=nums[i+1]；
             否则，只能尝试修改第 i+1 个数，使得 nums[i+1]>=nums[i]，在不知道第 i+2 个数多大的情况下，只能保证把 n[i+1]改的尽可能小，即nums[i+1]=nums[i]；
              */
			if (i - 1 >= 0 && nums[i - 1] > nums[i + 1]) {
				nums[i + 1] = nums[i];
			} else {
				nums[i] = nums[i + 1];
			}
		}
	}
	return count <= 1;
};

console.log(checkPossibility([ 1, 3, 2, 4 ]));
