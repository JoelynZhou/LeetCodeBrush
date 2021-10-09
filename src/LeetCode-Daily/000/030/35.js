var searchInsert = function (nums, target) {
    let i = 0;
    let j = nums.length - 1;
    while (i <= j) {
        let middle = (i + j) / 2;
        if (target === nums[middle]) {
            return middle;
        } else if (nums[middle] > target) {
            j = middle - 1;
        } else {
            i = middle + 1;
        }
    }
    return i;
};

const arr = [1, 3, 5, 6];
const target = 5;
const res = searchInsert(arr, target);
console.log("res", res);