/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (A, queries) {
    let list = [];
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            sum += A[i];
        }
    }
    queries.forEach(x => {
        const value = x[0];
        const id = x[1];
        if ((value % 2 && A[id] % 2) !== 0) {
            sum += (value + A[id]);
        } else if ((value % 2) === 0 && A[id] % 2 === 0) {
            sum += value;
        } else if ((value % 2) !== 0 && A[id] % 2 === 0) {
            sum -= A[id];
        }
        list.push(sum);
        A[id] += value;
        console.log(A);
    });
    return list;
};

console.log(sumEvenAfterQueries([-10, 2, -4, 5, -3, 3],
    [
        [-4, 2],
        [9, 0],
        [-8, 1],
        [5, 4],
        [1, 4],
        [9, 0]
    ]))