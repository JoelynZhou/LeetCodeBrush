/**
 * 面试题 17.14. 最小K个数
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function (arr, k) {
	return arr.sort((a, b) => a - b).slice(0, k);
};
