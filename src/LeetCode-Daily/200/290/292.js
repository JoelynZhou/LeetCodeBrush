/**
 * 292. Nim 游戏
 * @param {number} n
 * @return {boolean}
 * 思路：演绎推理 + 数学归纳
 */
var canWinNim = function (n) {
	return n % 4 !== 0;
};

/**
 * 思路二：动态规划
 * 动规方程思路：最优解一定是先手出 1、2、3 中，最好的一种情况
 * 动规方程：dp[i]=!dp[i-1] || !dp[i-2] || !dp[i-3]，其中 dp[1]=dp[2]=dp[3]=true;
 */
