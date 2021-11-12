/**
 * 1266. 访问所有点的最小时间
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
	let distance = 0;
	for (let i = 0; i < points.length - 1; i++) {
		distance += Math.max(
			Math.abs(points[i][0] - points[i + 1][0]),
			Math.abs(points[i][1] - points[i + 1][1])
		);
	}
	return distance;
};
