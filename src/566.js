var matrixReshape = function (nums, r, c) {
    let list = [];
    let row = [];
    if (nums.length === 0 || nums.length * nums[0].length < r * c) {
        return nums;
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            console.log("a", (i * nums[i].length + j + 1), c, (i * nums[i].length + j + 1) % c);
            row.push(nums[i][j]);
            if (((i * nums[i].length + j + 1) % c) === 0) {
                list.push(row);
                row = [];
            }
        }
    }
    console.log(list);
    return list;
}


// TEST CASE
const nums = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8]
];
const r = 1;
const c = 4;
matrixReshape(nums, r, c);