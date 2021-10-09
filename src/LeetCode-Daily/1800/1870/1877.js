/**
 * 1877. 数组中最大数对和的最小值
 * 数学问题
 * @param {number[]} nums
 * @return {number}
 */
 var minPairSum = function(nums) {
    nums=nums.sort((a,b)=>a-b);
     let i = 0, j = nums.length - 1;
     let max=0;
     while (i < j) {
         max = Math.max(max, nums[i] + nums[j]);
         i++; j--;
     }
     return max;
};