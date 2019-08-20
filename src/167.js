/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let i = 0;
    let j = numbers.length - 1;
    while (i < j) {
        let current = numbers[i] + numbers[j];
        if (current === target) {
            return [i + 1, j + 1];
        } else if (current > target) {
            j--;
        } else {
            i++;
        }
    }
    return null;
};

const input = [2, 7, 11, 15];
console.log(twoSum(input, 9));