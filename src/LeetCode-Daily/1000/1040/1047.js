/**
 * 1047. 删除字符串中的所有相邻重复项
 * 思路：栈操作
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
	let stack = [];
	for (let i = 0; i < s.length; i++) {
		if (stack.length === 0 || s[i] !== stack[stack.length - 1]) {
			stack.push(s[i]);
		} else {
			stack.pop();
		}
	}
	return stack.join("");
};
