/**
 * 面试题 05.07. 配对交换
 * 思路：拆分奇偶位，
 * @param {number} num
 * @return {number}
 */
var exchangeBits = function (num) {
	const odd = 0x55555555; //提取奇数位，左移
	const even = 0xaaaaaaaa; //提取偶数位，右移
	return ((num & even) >> 1) | ((num & odd) << 1); //相加
};
