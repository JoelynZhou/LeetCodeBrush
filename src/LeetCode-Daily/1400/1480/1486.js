/**
 * 1486. 数组异或操作
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
	let curr = start;
	let res = start;
	for (let i = 1; i < n; i++) {
		curr += 2;
		res ^= curr;
	}
	return res;
};
