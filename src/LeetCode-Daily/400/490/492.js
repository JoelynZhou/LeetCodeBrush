/**
 * 492. 构造矩形
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
	let width = Math.floor(Math.sqrt(area));
	while (area % width !== 0) {
		width--;
	}
	return [area / width, width];
};
console.log(constructRectangle(10));
