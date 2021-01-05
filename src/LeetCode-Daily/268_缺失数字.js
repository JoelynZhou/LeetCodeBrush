/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    nums.sort((a, b) => {
        return a - b;
    });
    if (nums[nums.length - 1] != nums.length) {
        return nums.length;
    } else if (nums[0] != 0) {
        return 0;
    }
    for (let i = 1; i < nums[nums.length - 1]; i++) {
        if (nums.findIndex(x => x === i) > -1) {
            continue;
        }
        return i;
    }
    return null;
};

const testData = [45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32, 4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34, 30, 25, 47, 0, 31, 42, 24, 10, 14];

console.log(missingNumber(testData));