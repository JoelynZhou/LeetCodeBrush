/**
 * 441. 排列硬币
 * 思路：暴力
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
	let step = 0;
	let total = 0;
	while (total < n) {
		step++;
		total += step;
	}
	return total === n ? step : step - 1;
};

// 还可以用数学和二分法来解
