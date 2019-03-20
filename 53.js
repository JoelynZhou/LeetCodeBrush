// 最大子序和

/**
 * 方案1：超时
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//   let max = nums[0];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i; j < nums.length; j++) {
//       if (sum(nums, i, j) > max) {
//         max = sum(nums, i, j);
//       }
//     }
//   }
//   return max;
// };

// function sum(nums, start, end) {
//   let num = 0;
//   for (let k = start; k <= end; k++) {
//     num += nums[k];
//   }
//   return num;
// }

// const nums = [-2, 1];
// console.log("res", maxSubArray(nums));

/**
 * 方案2：
 * @param {number[]} nums
 * @return {number}
 */
// const nums = [-2, 1];
// const nums = [-3, -2, 1, 2, 2, 0, 1, 0];
// const nums = [-1];
const nums = [-3, -2, 0, -1];
console.log("res", maxSubArray(nums));

function maxSubArray(nums) {
  const maxNum = Math.max.apply(null, nums); //求数组中的最大值
  if (maxNum >= 0) {
    let maxSum = nums[0];
    let thisSum = 0; //在数组不全为负的情况下，该假设才成立
    for (let i = 0; i < nums.length; i++) {
      thisSum += nums[i];
      if (thisSum > maxSum) {
        maxSum = thisSum;
      }
      thisSum = Math.max(0, thisSum); //很关键！！！
    }
    return maxSum;
  } else {
    return maxNum; //数组全为负的情况下，最大子序列即数组中最大元素组成的长度为1的数组
  }
}
