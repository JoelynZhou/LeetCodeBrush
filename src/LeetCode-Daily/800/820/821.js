/**
 * 821. 字符的最短距离
 * O(2n)
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
	let ids = [];
	let nums = [];
	for (let i = 0; i < s.length; i++) {
		if (s[i] === c) {
			ids.push(i);
		}
	}
	for (let i = 0; i < s.length; i++) {
		if (ids.length === 1 || i <= ids[0]) {
			nums[i] = Math.abs(ids[0] - i);
		} else if (i <= ids[1]) {
			nums[i] = Math.min(Math.abs(ids[0] - i), Math.abs(ids[1] - i));
			if (i === ids[1]) {
				ids.shift();
			}
		}
	}
	return nums;
};
console.log(shortestToChar("aaba", "b"));
