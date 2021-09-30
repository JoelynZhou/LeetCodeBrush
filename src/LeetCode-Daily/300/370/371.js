/**
 * 371. 两整数之和
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
	const data = Math.sqrt(a * a + b * b + a * b * 2);
	if (
		Math.min(a, b) < 0 &&
		Math.abs(Math.min(a, b)) > Math.abs(Math.max(a, b))
	) {
		return data * -1;
	}
	return data;
};
