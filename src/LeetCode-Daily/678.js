/**
 * 678. 有效的括号字符串
 */
/**
 * 
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
	let left_stack = [];
	let star_stack = [];
	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') {
			left_stack.push(i);
		} else if (s[i] === '*') {
			star_stack.push(i);
		} else {
			if (left_stack.length > 0) {
				left_stack.pop();
			} else if (star_stack.length > 0) {
				star_stack.pop();
			} else {
				return false;
			}
		}
	}
	if (left_stack.length > star_stack.length) {
		return false;
	}
	while (left_stack.length > 0) {
		if (left_stack[left_stack.length - 1] > star_stack[star_stack.length - 1]) {
			return false;
		} else {
			left_stack.pop();
			star_stack.pop();
		}
	}
	return true;
};
