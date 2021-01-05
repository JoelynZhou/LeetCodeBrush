/**
 * 排列组合问题可以用二叉树来简单描述
 * 思路：创建二叉树，遍历二叉树，条件校验
 */
const origin = [ 'A', 'B', 'C', 'D', 'E' ];
let output = [];
for (let i = 12345; i <= 54321; i++) {
	// TODO
	// 可以优化成寻找下一个比 12345 大的排列组合
	const temp = [
		Math.floor(i / 10000),
		Math.floor((i / 1000) % 10),
		Math.floor((i / 100) % 10),
		Math.floor((i / 10) % 10),
		i % 10
	];
	if (isValid(temp)) {
		// 校验
		check(temp);
	} else {
		continue;
	}
}
console.log(output);

function check(members) {
	if (members[1] === 5 || members[2] === 5) {
		return;
	}
	const list = [ members[0] === 5, members[1] === 2, members[4] === 1, members[0] !== 3, members[0] === 4 ];
	if (
		list[members[0] - 1] &&
		list[members[1] - 1] &&
		!list[members[2] - 1] &&
		!list[members[3] - 1] &&
		!list[members[4] - 1]
	) {
		const res = [];
		members.forEach((x) => {
			res.push(origin[x - 1]);
		});
		output.push(res);
	}
}

function isValid(arr) {
	let hash = {};
	for (let i in arr) {
		if (hash[arr[i]] || arr[i] > 5 || arr[i] === 0) {
			return false;
		}
		hash[arr[i]] = true;
	}
	return true;
}
