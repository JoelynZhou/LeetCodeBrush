/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
	const num = parseInt(str, 10);
	if (isNaN(num)) {
		return 0;
	} else if (num < Math.pow(-2, 31) || num >= Math.pow(2, 31)) {
		return num < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
	} else {
		return num;
	}
};

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
	let res = str.trim().match(/^(\-|\+)?\d+/g);
	if (isNaN(res)) {
		return 0;
	} else if (res < Math.pow(-2, 31)) {
		return Math.pow(-2, 31);
	} else if (res >= Math.pow(2, 31)) {
		return Math.pow(2, 31) - 1;
	} else {
		return res;
	}
};
