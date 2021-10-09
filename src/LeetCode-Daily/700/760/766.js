/**
 * 托普利茨矩阵
 * 分析：
 * 判断条件可以简化为：判断当前元素的左边跟下边的元素是否相等
 */
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
	const m = matrix.length;
	const n = matrix[0].length;
	for (let i = 0; i < m - 1; i++) {
		for (let j = 1; j < n; j++) {
			if (matrix[i][j - 1] !== matrix[i + 1][j]) {
				return false;
			}
		}
	}
	return true;
};
