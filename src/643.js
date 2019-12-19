/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let count = -40000;
    if (nums.length <= k) {
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
        }
        return sum / k;
    } else {
        for (let i = 0; i <= nums.length - k; i++) {
            if (i > 1 && nums[i - 1] >= nums[i + k - 1]) {
                continue;
            }
            let sum = 0;
            for (let j = 0; j < k; j++) {
                sum += nums[i + j];
            }
            if (sum > count) {
                count = sum;
            }
        }
        return count / k;
    }
};

findMaxAverage([3, 3, 4, 3, 0], 3);