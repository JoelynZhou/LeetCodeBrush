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

/**
 * 思路：只出现一次，即：第一个数即最后一个数
 * @param {string} s
 * @return {character}
 */
var firstUniqChar1 = function (s) {
	for (let i = 0; i < s.length; i++) {
		if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
			return s[i];
		}
	}
	return " ";
};

console.log(firstUniqChar1("abaccdeff"));
