/**
 * @param {number} numRows
 * @return {number[][]}
 * 方案2：去掉首尾判断
 */
var generate = function(numRows) {
  if (numRows === 0) {
    return [];
  }
  let dest = [[1]];
  for (let i = 1; i < numRows; i++) {
    let arr = [];
    for (let j = 1; j < i; j++) {
      arr.push(dest[i - 1][j - 1] + dest[i - 1][j]);
    }
    dest.push([1, ...arr, 1]);
  }
  return dest;
};
