/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
    let sumA = 0;
    let sumB = 0;
    let setA = new Map();
    let setB = new Map();
    for (let i = 0; i < A.length; i++) {
        sumA += A[i];
        setA.set(A[i]);
    }
    for (let j = 0; j < B.length; j++) {
        sumB += B[j];
        setB.set(B[j]);
    }
    const minus = (sumB - sumA) / 2;
    for (let i = 0; i < A.length; i++) {
        if (setB.has(A[i] + minus)) {
            return [A[i], A[i] + minus];
        }
    }
    return [];
};

console.log(fairCandySwap([1, 1], [2, 2]));