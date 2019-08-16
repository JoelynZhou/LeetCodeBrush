/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//   for (i = nums.length - 1; i > -1; i--) {
//     const idx = nums.indexOf(target - nums[i]);
//     if (idx > -1 && idx < i) {
//       return [idx, i];
//     }
//   }
//   console.log("No such two numbers");
// };

var twoSum = (nums, target) => {
  let hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    hash.set(nums[i], i);
  }
  for (let j = 0; j < nums.length; j++) {
    const numToFind = target - nums[j];
    if (hash.has(numToFind) && j !== hash.get(numToFind)) {
      return [j, hash.get(numToFind)];
    }
  }
};

const resp = twoSum([1, 2, 3, 4], 6);
console.log("resp", resp);
