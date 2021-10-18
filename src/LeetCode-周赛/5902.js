/**
 * 5902. 检查句子中的数字是否递增
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
	const arr = s.match(/\d+/g);
	for (let i = 0; i < arr.length - 1; i++) {
		if (Number(arr[i]) >= Number(arr[i + 1])) {
			return false;
		}
	}
	return true;
};
const s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles";
console.log(areNumbersAscending(s));
