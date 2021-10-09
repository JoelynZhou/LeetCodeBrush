/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
    const minus = A[A.length - 1] - A[0];
    const symbol = (minus === 0) ? 0 : (minus > 0 ? 1 : -1);
    if (symbol === 0) {
        return Array.from(new Set(A)).length === 1;
    } else {
        for (let i = 1; i < A.length; i++) {
            if ((symbol > 0 && A[i] < A[i - 1]) || (symbol < 0 && A[i] > A[i - 1])) {
                return false;
            }
        }
        return true;
    }
};

console.log(isMonotonic([1, 3, 2]))