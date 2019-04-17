/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums = nums.sort((a, b) => {
    return a - b;
  });
  console.log("nums", nums);
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    if ((i > 0) & (nums[i] === nums[i - 1])) {
      continue;
    }
    let target = 0 - nums[i]; //注意这里不能写成 let target=-nums[i];因为nums[i]可能为0
    let [j, k] = [i + 1, nums.length - 1];
    while (j < k) {
      if (nums[j] + nums[k] === target) {
        console.log(
          "output",
          output,
          output.any(x => x === [nums[i], nums[j], nums[k]])
        );
        if (output.any(x => x === [nums[i], nums[j], nums[k]]) === -1) {
          output.push([nums[i], nums[j], nums[k]]);
        }
        j++;
        k--;
      } else if (nums[j] + nums[k] < target) {
        j++;
      } else {
        k--;
      }
    }
  }
  return output;
};

// const input = [-1, 0, 1, 2, -1, -4];
// const input = [0, 0, 0];
const input = [-2, 0, 0, 2, 2];
console.log(threeSum(input));
