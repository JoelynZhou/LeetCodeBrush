/**
 * 476. 数字的补数
 * 思路 1： 数学
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
	const exp = Math.floor(Math.log2(num) + 1);
	return Math.pow(2, exp) - num - 1;
};
