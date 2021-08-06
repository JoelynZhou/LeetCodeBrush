/**
 * 18. 四数之和
 * 思路：排序+双指针，降低一层复杂度
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
	nums = nums.sort((a, b) => a - b);
    let res = [];
    if (nums.length < 4) {
        return [];
    }
    for (let i = 0; i < nums.length - 3; i++) {
		if (nums.length>4 && i > 0 && nums[i] === nums[i - 1]) {
			continue;
		}
        for (let j = nums.length - 1; j >= 3; j--) {
			if (nums.length>4 && j < nums.length - 1 && nums[j] === nums[j + 1]) {
				continue;
			}
			const twos = target - nums[i] - nums[j];
			let left = i + 1;
            let right = j - 1;
			while (left < right) {
				if (nums[left] + nums[right] < twos) {
					left++;
				} else if (nums[left] + nums[right] > twos) {
					right--;
				} else {
					res.push([nums[i], nums[left], nums[right], nums[j]]);
					while (nums[left + 1] === nums[left]) {
						left++;
					}
					while (nums[right - 1] === nums[right]) {
						right--;
					}
					left++;
					right--;
				}
			}
		}
	}
	return res;
};
console.log(fourSum([0,0,0,0],0));
