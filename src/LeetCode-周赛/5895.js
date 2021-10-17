/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function (grid, x) {
	let cnt1 = 0;
	let cnt2 = 0;
	let arr = [];
	for (let i = 0; i < grid.length; i++) {
		arr = arr.concat(grid[i]);
	}

	arr = arr.sort((a, b) => a - b);
	const avg =
		arr.reduce((prev, curr) => prev + curr, 0) / Math.pow(2, grid.length);
	const left = arr.filter((x) => x < avg);
	const right = arr.find((x) => x >= avg);
	for (let i = 0; i < arr.length; i++) {
		if (Math.abs(arr[i] - left[left.length - 1]) % x !== 0) {
		}
		cnt1 += Math.abs(arr[i] - left[left.length - 1]) / x;
	}
	return cnt1;
};
console.log(
	minOperations(
		[
			[2, 8],
			[6, 4],
		],
		2
	)
);
