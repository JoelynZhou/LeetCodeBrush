/**
 * 求斐波那契数列
 * @param {number} n
 * @return {number}
 */
// 思路 1：递归
var fib = function(n) {
	if (n <= 1) {
		return n;
	}
	return fib(n - 1) + fib(n - 2);
};

// 思路 2：动规
var fib2 = function(n) {
	let dp = Array(n);
	dp[0] = 0;
	dp[1] = 1;
	for (let i = 2; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}
	return dp[n];
};

console.log(fib(4));
console.log(fib2(4));
