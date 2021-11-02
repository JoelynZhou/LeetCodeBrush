/**
 * 771. 宝石与石头
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
	const hash = new Set(jewels.split(""));
	let count = 0;
	for (let i = 0; i < stones.length; i++) {
		if (hash.has(stones[i])) {
			count++;
		}
	}
	return count;
};
console.log(numJewelsInStones("aA", "aAAbbbb"));
