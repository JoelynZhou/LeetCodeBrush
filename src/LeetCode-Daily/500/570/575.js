/**
 * 575. 分糖果
 * 思路 1：数组去重
 * 把所有糖果的种类都给妹妹一遍，
 * 如果种类不够多，则妹妹能拿到所有种类的数量；
 * 如果种类足够多，则妹妹能拿多少种类算多少种类；
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
	const diffType = Array.from(new Set(candyType));
	return Math.min(candyType.length / 2, diffType.length);
};
console.log(distributeCandies([1, 1, 2, 2, 3, 3]));
