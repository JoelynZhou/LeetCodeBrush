/**
 * 1291. 顺次数
 * 思路：
 * 假设 low=56，high=1550
 * 寻找 10-10000中满足条件的数
 * 逻辑有点绕，但结果是对的
 * @param {number} left
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
	let res = [];

	function seq(left, high) {
		let start = Array(String(left).length)
			.fill(String(left)[0])
			.map((val, index) => Number(val) + index)
			.join("");
		let curr = Number(start);
		let step = Number(Array(String(left).length).fill(1).join(""));
		while (curr <= high && String(curr)[String(curr).length - 1] !== "0") {
			if (curr >= low) {
				res.push(curr);
			}
			curr += step;
		}
		if (curr <= high) {
			seq(Math.pow(10, String(left).length), high);
		}
	}
	seq(Math.pow(10, String(low).length - 1), high);
	return res;
};
console.log(sequentialDigits(8511, 23553));
