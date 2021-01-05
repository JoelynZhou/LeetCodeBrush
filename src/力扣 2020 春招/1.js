/**
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function(coins) {
	let count = 0;
	for (let i = 0; i < coins.length; i++) {
		count += Math.floor(coins[i] / 2) + coins[i] % 2;
	}
	return count;
};
console.log(minCount([ 4, 2, 1 ]));
