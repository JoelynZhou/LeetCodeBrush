/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
	const m = matrix.length;
	const n = matrix[0].length;
	let count = 0; //当前层级
	let queue = []; //存放当前层级下的数据
	let identity = new Array(m).fill(false).map(() => new Array(n).fill(false)); // 用于存放标记过的数据
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (matrix[i][j] === 0) {
				queue.push([ i, j ]);
				identity[i][j] = true;
			}
		}
	}
	const direction = [ [ 1, 0 ], [ -1, 0 ], [ 0, 1 ], [ 0, -1 ] ]; // 四个方向
	while (queue.length > 0) {
		count++;
		let temp = [];
		for (let i = 0; i < queue.length; i++) {
			for (let j = 0; j < direction.length; j++) {
				const x = queue[i][0] + direction[j][0];
				const y = queue[i][1] + direction[j][1];
				if (x >= 0 && y >= 0 && x < m && y < n && identity[x][y] === false) {
					identity[x][y] = true;
					temp.push([ x, y ]);
					matrix[x][y] = count;
				}
			}
		}
		queue = temp; //当前扩散的数组作为下一次遍历的数据源
	}
	return matrix;
};

console.log(updateMatrix([ [ 0, 0, 0 ], [ 0, 1, 0 ], [ 1, 1, 1 ] ]));
