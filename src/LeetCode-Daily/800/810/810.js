/**
 * @param {number[]} nums
 * @return {boolean}
 */
var xorGame = function (nums) {
	return (
		nums.length % 2 === 0 ||
		nums.reduce((pre, curr) => (pre ^= curr), 0) === 0
	);
};
