/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
    let list = [];
    for (let i = 0; i < A[0].length; i++) {
        let row = [];
        for (let j = 0; j < A.length; j++) {
            row.push(A[j][i]);
        }
        list.push(row);
    }
    return list;
};

const A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(transpose(A));