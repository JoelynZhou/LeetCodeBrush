/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
	let list = [];
	for (let i = 0; i < A[0].length; i++) {
		let row = [];
		for (let j = 0; j < A.length; j++) {
			row.push(A[j][i]);
		}
		list.push(row);
	}
	return list;
};

var transpose1 = function(A) {
	return Array.from({ length: A[0].length }, (_, i) => A.map((v) => v[i]));
};

const A = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];
console.log(transpose(A));
