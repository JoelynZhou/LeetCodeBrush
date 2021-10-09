/**
 * 204. 计数质数
 * 思路：素数筛法 https://zhuanlan.zhihu.com/p/100051075
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
	let arr = new Array(n).fill(1);
	arr[0] = 0;
	arr[1] = 0;
	for (let i = 2; i <= n; i++) {
		if (arr[i] === 1) {
			if (Math.pow(i, 2) <= n) {
				for (let j = 2; i * j <= n; j++) {
					arr[i * j] = 0;
				}
			} else {
				return arr.filter((x) => Boolean(x)).length;
			}
		}
	}
	return arr.filter((x) => Boolean(x)).length;
};
console.log(countPrimes(30));
