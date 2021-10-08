/**
 * 434. 字符串中的单词数
 * 思路：计算单词第一个字母出现的次数
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
	let cnt = 0;
	for (let i = 0; i < s.length; i++) {
		if ((i === 0 || s[i - 1] === " ") && s[i] !== " ") {
			cnt++;
		}
	}
	return cnt;
};
