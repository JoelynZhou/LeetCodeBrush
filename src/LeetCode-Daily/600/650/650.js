/**
 * 650. 只有两个键的键盘
 * 数学法：https://leetcode-cn.com/problems/2-keys-keyboard/solution/zhi-you-liang-ge-jian-de-jian-pan-by-lee-ussa/
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
	if (n === 1) {
		return 0;
	}
	for (let i = 2; i * i <= n; i++) {
		if (n % i === 0) {
			return i + minSteps(n / i);
		}
	}
	return n;
};
