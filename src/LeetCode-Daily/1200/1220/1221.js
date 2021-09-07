/**
 * 1221. 分割平衡字符串
 * 思路 1：遍历（O(n)）
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
	let cnt = 0;
	let l = 0;
	let r = 0;
	for (let i = 0; i < s.length; i++) {
		s[i] === "L" && l++;
		s[i] === "R" && r++;
		if (l === r && l > 0) {
			cnt++;
			l = r = 0;
		}
	}
	return cnt;
};
