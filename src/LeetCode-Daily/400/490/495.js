/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
	let cnt = duration;
	for (let i = 0; i < timeSeries.length - 1; i++) {
		cnt += Math.min(duration, timeSeries[i + 1] - timeSeries[i]);
	}
	return cnt;
};
console.log(findPoisonedDuration([1, 4], 2));
