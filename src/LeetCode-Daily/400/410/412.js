/**
 * 412. Fizz Buzz
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
	let arr = [];
	for (let i = 1; i <= n; i++) {
		let str = "";
		if (i % 3 === 0) {
			str += "Fizz";
		}
		if (i % 5 === 0) {
			str += "Buzz";
		}
		str = str || String(i);
		arr.push(str);
	}
	return arr;
};
