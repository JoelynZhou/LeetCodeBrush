/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  let i = 0;
  let j = A.length - 1;
  let list = [];
  while (i <= j) {
    if (i === j) {
      list.unshift(A[i] * A[i]);
      return list;
    }
    if (Math.abs(A[i]) <= Math.abs(A[j])) {
      list.unshift(A[j] * A[j]);
      j--;
    } else {
      list.unshift(A[i] * A[i]);
      i++;
    }
  }
};

console.log(sortedSquares([0, 2, 3, 11]));
