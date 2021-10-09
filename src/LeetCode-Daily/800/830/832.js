/**
 * 思路：原地翻转 + 异或
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
	for (let i = 0; i < A.length; i++) {
		let m = 0;
		n = A[0].length - 1;
		while (m < n) {
			if (A[i][m] === A[i][n]) {
				A[i][m] = A[i][m] ^ 1;
				A[i][n] = A[i][n] ^ 1;
			}
			m++;
			n--;
		}
		if (m === n) {
			A[i][m] = A[i][m] ^ 1;
		}
	}
	return A;
};
