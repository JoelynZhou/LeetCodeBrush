/**
 * 杨辉数组生成问题
 * 方案1：超时
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let dest = [];
  for (let i = 0; i < numRows; i++) {
    let arr = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        arr.push(1);
      } else {
        console.log("dest,i,j", dest, i, j);
        arr.push(dest[i - 1][j - 1] + dest[i - 1][j]);
      }
    }
    dest.push(arr);
  }
  return dest;
};

console.log(generate(5));
