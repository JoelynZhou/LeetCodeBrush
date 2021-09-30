/**
 * 223. 矩形面积
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
	const aArea = Math.abs(ax1 - ax2) * Math.abs(ay1 - ay2);
	const bArea = Math.abs(bx1 - bx2) * Math.abs(by1 - by2);
	const x = [ax1, ax2, bx1, bx2].sort((a, b) => a - b);
	const y = [ay1, ay2, by1, by2].sort((a, b) => a - b);
	const checkPointX = (x[1] + x[2]) / 2;
	const checkPointY = (y[1] + y[2]) / 2;
	let subArea = (x[2] - x[1]) * (y[2] - y[1]);
	if (
		(checkPointX - ax1) * (checkPointX - ax2) >= 0 ||
		(checkPointY - ay1) * (checkPointY - ay2) >= 0
	) {
		subArea = 0;
	}
	return aArea + bArea - subArea;
};
