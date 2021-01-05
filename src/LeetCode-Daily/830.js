/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function (S) {
    let arr = [];
    if (S.length < 3) {
        return [];
    }
    for (let i = 0, j = 0; i < S.length; i = j) {
        while (j < S.length && S[i] === S[j]) {
            ++j;
        }
        if (j - i > 2) {
            arr.push([i, j - 1]);
        }
    }
    return arr;
};