/**
 * 1816. 截断句子
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
	const arr = s.split(" ");
	return arr.slice(0, k).join(" ");
};
