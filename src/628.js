/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    let positive = [];
    let negative = [];
    if (nums.length === 3) {
        return nums[0] * nums[1] * nums[2];
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            if (positive.length < 3) {
                positive.push(nums[i]);
            } else if (positive.some(x => x <= nums[i])) {
                positive.push(nums[i]);
                positive = positive.sort((a, b) => b - a).slice(0, 3);
            }
        } else {
            if (negative.length < 2) {
                negative.push(nums[i]);
            } else if (negative.some(x => x >= nums[i])) {
                negative.push(nums[i]);
                negative = negative.sort((a, b) => a - b).slice(0, 2);
            }
        }
    }
    console.log("positive", positive);
    console.log("negative", negative);
    const res1 = positive[0] * positive[1] * positive[2];
    if (negative.length === 2) {
        const res2 = positive[0] * negative[0] * negative[1];
        return res1 > res2 ? res1 : res2;
    }
    return res1;
};

//Test Case
const test = [722, 634, -504, -379, 163, -613, -842, -578, 750, 951, -158, 30, -238, -392, -487, -797, -157, -374, 999, -5, -521, -879, -858, 382, 626, 803, -347, 903, -205, 57, -342, 186, -736, 17, 83, 726, -960, 343, -984, 937, -758, -122, 577, -595, -544, -559, 903, -183, 192, 825, 368, -674, 57, -959, 884, 29, -681, -339, 582, 969, -95, -455, -275, 205, -548, 79, 258, 35, 233, 203, 20, -936, 878, -868, -458, -882, 867, -664, -892, -687, 322, 844, -745, 447, -909, -586, 69, -88, 88, 445, -553, -666, 130, -640, -918, -7, -420, -368, 250, -786];
maximumProduct(test);