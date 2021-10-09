/**
 * 48. 旋转图像
 * 思路：先转置，再翻转
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
	let tempArr = [];
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < i; j++) {
			let temp = matrix[j][i];
			matrix[j][i] = matrix[i][j];
			matrix[i][j] = temp;
		}
	}
	console.log(matrix);
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < Math.ceil(matrix.length / 2); j++) {
			let temp = matrix[i][j];
			matrix[i][j] = matrix[i][matrix[i].length - 1 - j];
			matrix[i][matrix[i].length - 1 - j] = temp;
		}
	}
};
console.log(
	rotate([
		[5, 1, 9, 11],
		[2, 4, 8, 10],
		[13, 3, 6, 7],
		[15, 14, 12, 16],
	])
);
