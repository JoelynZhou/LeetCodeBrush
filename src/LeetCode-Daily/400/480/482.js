/**
 * 482. 密钥格式化
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
	let res = [];
	let cnt = 0;
	for (let i = s.length - 1; i >= 0; i--) {
		if (s[i] !== "-") {
			cnt++;
			res.push(s[i].toUpperCase());
			if (cnt % k === 0) {
				res.push("-");
			}
		}
	}
	if (res.length > 0 && res[res.length - 1] === "-") {
		res.pop();
	}
	return res.reverse().join("");
};
