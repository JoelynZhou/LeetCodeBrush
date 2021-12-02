/**
 * 506. 相对名次
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
	let hashMap = new Map(); //记录每个分数的位置
	let arr = new Array(score.length);
	for (let i = 0; i < score.length; i++) {
		hashMap.set(score[i], i);
	}
	score
		.sort((a, b) => b - a)
		.forEach((n, index) => {
			arr[hashMap.get(n)] = getRank(index);
		});
	return arr;
};

function getRank(sort) {
	switch (sort) {
		case 0:
			return "Gold Medal";
		case 1:
			return "Silver Medal";
		case 2:
			return "Bronze Medal";
		default:
			return String(sort + 1);
	}
}

findRelativeRanks([5, 4, 3, 1, 2]);
