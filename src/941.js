/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
    if (A.length < 3) {
        return false;
    }
    let i = 0;
    j = A.length - 1;
    while (i < A.length - 2 && A[i] < A[i + 1]) {
        i++;
    }
    while (j > 1 && A[j] < A[j - 1]) {
        j--;
    }
    return i === j;
};

console.log(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));