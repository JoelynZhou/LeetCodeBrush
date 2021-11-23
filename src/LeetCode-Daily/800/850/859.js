/**
 * 859. 亲密字符串
 * 思路：枚举
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
	if (s.length !== goal.length) {
		return false; // 长度不同必然不是亲密字符
	}
	if (s === goal) {
		const arr = new Array(26).fill(0); // 如果两者相同，则需要满足超过 2 个字符能够交换，即：出现2 个及以上重复元素
		for (let i = 0; i < s.length; i++) {
			arr[s[i].charCodeAt() - "a".charCodeAt()]++;
			if (arr[s[i].charCodeAt() - "a".charCodeAt()] > 1) {
				return true;
			}
		}
		return false;
	} else {
		// 如果两者不相同，则有且只能有2 个字符交换，使得两者相同
		let first = -1;
		let second = -1;
		for (let i = 0; i < s.length; i++) {
			if (s[i] !== goal[i]) {
				if (first === -1) {
					first = i;
				} else if (second === -1) {
					second = i;
				} else {
					return false; //必须只存在两个位置
				}
			}
		}
		return (
			second !== -1 && // 必须存在两个位置
			s[first] === goal[second] && //交换这两个位置必须使两者相同
			s[second] === goal[first]
		);
	}
};
