/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, relation, k) {
	let arr = relation.filter((x) => x[0] === 0).map((y) => y[1]);
	while (k > 1) {
		if (arr.length === 0) {
			return 0;
		}
		arr = relation.filter((x) => arr.some((y) => y === x[0])).map((y) => y[1]);
		k--;
	}
	return arr.filter((x) => x === n - 1).length;
};

console.log(numWays(5, [ [ 0, 2 ], [ 2, 1 ], [ 3, 4 ], [ 2, 3 ], [ 1, 4 ], [ 2, 0 ], [ 0, 4 ] ], 3));
