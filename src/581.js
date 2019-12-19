var findUnsortedSubarray = function (nums) {
    let min = 0;
    let max = nums.length - 1;
    const a = nums[min] <= nums[min + 1];
    const b = nums[max] >= nums[max - 1];
    while (min < max && (a || b)) {
        console.log("a", nums[min], nums[min + 1], nums[min] <= nums[min + 1]);
        console.log("b", nums[max], nums[max - 1], nums[max] >= nums[max - 1]);
        if (a) {
            min++;
        }
        if (b) {
            max--;
        }
    }
    return max - min + 1;
};

const resp = findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]);
console.log('resp:', resp)