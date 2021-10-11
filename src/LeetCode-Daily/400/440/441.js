/**
 * 441. 排列硬币
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
