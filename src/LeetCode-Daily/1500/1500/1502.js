/**
 * 1502. 判断能否形成等差数列
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
	arr = arr.sort((a, b) => a - b);
	let step = arr[1] - arr[0];
	for (let i = 2; i < arr.length; i++) {
		if (arr[i] - arr[i - 1] !== step) {
			return false;
		}
	}
	return true;
};
