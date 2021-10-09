/**
 * 剑指 Offer 50. 第一个只出现一次的字符
 * 思路：遍历转哈希，哈希再遍历
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
	let hashMap = new Map();
	for (let i = 0; i < s.length; i++) {
		hashMap.set(s[i], hashMap.has(s[i]) ? hashMap.get(s[i]) + 1 : 1);
	}
	for (const s of hashMap) {
		if (s[1] === 1) {
			return s[0];
		}
	}
	return " ";
};
console.log(firstUniqChar("abaccdeff"));
