/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
	if (matrix.length === 0) {
		return [];
	}
	let cnt = 0;
	let [ x, y ] = [ 0, 0 ]; // 当前坐标
	let resp = [ matrix[x][y] ];
	// 顺时针旋转，即按照【右下左上】的优先级查找下一个坐标点位置
	const dx = [ 1, 0, -1, -0 ];
	const dy = [ 0, 1, 0, -1 ];
	let [ curX, curY ] = [ x + dx[cnt % 4], y + dy[cnt % 4] ]; // 第一次尝试
	let [ nextX, nextY ] = [ x + dx[(cnt + 1) % 4], y + dy[(cnt + 1) % 4] ]; // 第二次尝试
	while (matrix[curX][curY] || matrix[nextX][nextY]) {
		console.log(curX, curY);
		if (matrix[curX][curY]) {
			x = curX;
			y = curY;
			resp.push(matrix[x][y]);
			matrix[x][y] = undefined;
		} else if (matrix[nextX][nextY]) {
			x = nextX;
			y = nextY;
			resp.push(matrix[x][y]);
			matrix[x][y] = undefined;
			cnt++;
		}
	}
};

console.log(spiralOrder([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]));
