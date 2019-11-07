/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let list = [];
    for (let i = 0; i < nums.length; i++) {
        if (list.findIndex(x => x === nums[i]) > -1 || (list.length > 2 && list.every(x => x > nums[i]))) {
            continue;
        } else {
            list.push(nums[i]);
        }
    }
    list = list.sort((a, b) => {
        return b - a;
    });
    return list.length > 2 ? list[2] : list[0];
};

const data = [1, -2147483648, 2];
console.log(thirdMax(data));