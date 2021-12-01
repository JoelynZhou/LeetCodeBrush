/**
 * 1446. 连续字符
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
	let max = 1;
	let curr = 1;
	for (let i = 1; i < s.length; i++) {
		if (s[i] !== s[i - 1]) {
			curr = 1;
		} else {
			curr++;
			max = Math.max(curr, max);
		}
	}
	return max;
};
