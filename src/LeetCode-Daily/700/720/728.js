/**
 * 728. 自除数
 * 思路：暴力法
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
	let arr = [];
	for (let i = left; i <= right; i++) {
		const nums = String(i).split("");
		if (nums.every((num) => num > 0 && i % num === 0)) {
			arr.push(i);
		}
	}
	return arr;
};
console.log(selfDividingNumbers(1, 22));
