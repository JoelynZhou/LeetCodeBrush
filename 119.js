/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let list = [1];
  for (let i = 1; i <= rowIndex; i++) {
    let temp = list.slice(0); //注意用浅拷贝
    temp[0] = 1;
    for (let j = 1; j <= i; j++) {
      temp[j] = list[j - 1] + list[j];
    }
    temp[i] = 1;
    list = temp;
  }
  return list;
};

console.log(getRow(4));
