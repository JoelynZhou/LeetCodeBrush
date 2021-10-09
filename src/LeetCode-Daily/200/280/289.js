/* eslint-disable indent */
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * 细胞自动机模型
 * 分析：
 * 根据百度百科描述，生存规律总结如下：
 * 1. 细胞周围有三个细胞为生，则该细胞为生
 * 2. 细胞周围有两个细胞为生，则该细胞维持原状态
 * 3. 其他情况则死
 * 
 * 这一题最主要的问题在于，不需要 return 新数组，而是修改源数组，
 * 但是每个细胞的状态是依赖于其他细胞的初始状态，如果修改源数组，会影响到后面的计算结果。
 * 除了提示中提到的原地算法，最简单的会想到复制一份源数组，用于计算
 */
var gameOfLife = function(board) {
	if (board.length === 0) {
		return board;
	}
	const copyBoard = JSON.parse(JSON.stringify(board)); // 二维数组的拷贝不能用 Array.slice(0)
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			const num = nearAliveNum(copyBoard, i, j); //周围的活细胞个数
			if (num === 3) {
				board[i][j] = 1;
			} else if (num !== 2) {
				board[i][j] = 0;
			}
		}
	}
	return board;
};
// 查询单个细胞周围的活细胞个数
const nearAliveNum = (origin, x, y) => {
	let count = 0;
	const step = [ -1, 0, 1 ];
	for (let m = 0; m < 3; m++) {
		for (let n = 0; n < 3; n++) {
			const a = x + step[m];
			const b = y + step[n];
			if (a < 0 || a >= origin.length || b < 0 || b >= origin[0].length) {
				continue;
			} else if (origin[a][b] === 1) {
				count++;
			}
		}
	}
	return count - origin[x][y];
};
console.log(gameOfLife([ [ 0, 1, 0 ], [ 0, 0, 1 ], [ 1, 1, 1 ], [ 0, 0, 0 ] ]));
