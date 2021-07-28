/**
 * 228. 汇总区间
 * 思路：一次遍历
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    if (nums.length === 0) {
        return nums;
    }
    if (nums.length === 1) {
        return [String(nums[0])]
    }
    let left = nums[0]; let right = nums[0];
    let arr = [];
     for (let i = 1; i < nums.length; i++) {
         if (nums[i] === right + 1) {
             right++;
         }else if(nums[i]!==right) {
             arr.push(left === right ? `${left}` : `${left}->${right}`);
             left = right = nums[i];
         }
         if (i === nums.length - 1) {
            arr.push(left === right ? `${left}` : `${left}->${right}`);
         }
     }
    return arr;
};

console.log(summaryRanges([0,2,3,4,6,8,9]))