/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var checkOverlap = function(radius, x_center, y_center, x1, y1, x2, y2) {
	const list = [ [ x1, y1 ], [ x2, y1 ], [ x1, y2 ], [ x2, y2 ] ];
	if (distance(x_center, y_center, (x1 + x2) / 2, (y1 + y2) / 2) <= radius * radius) {
		return true;
	} else if (list.some((point) => distance(x_center, y_center, point[0], point[1]) <= radius * radius)) {
		return true;
    } else if (Math.abs(y1 - y_center) < radius && (x_center - x1) * (x_center - x2) < 0 ||
        Math.abs(y2 - y_center) < radius && (x_center - x1) * (x_center - x2) < 0 ||
        Math.abs(x1 - x_center) < radius && (y_center - y1) * (y_center - y2) < 0 ||
        Math.abs(x2 - x_center) < radius && (y_center - y1) * (y_center - y2) < 0
    ) { 
        return false;
    } return true;
};

const distance = (x1, y1, x2, y2) => {
	return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
};
