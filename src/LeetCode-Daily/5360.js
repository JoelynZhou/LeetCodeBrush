/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
	const hashmap = new Map();
	let i = 0;
	while (i <= n) {
		const sum = sumFunc(i);
		if (hashmap.has(sum)) {
			hashmap.set(sum, hashmap.get(sum) + 1);
		} else {
			hashmap.set(sum, 0);
		}
		i++;
	}
	const arr = Array.from(hashmap).sort((a, b) => a[1] - b[1]);
	return arr.filter((x) => x[1] === arr[arr.length - 1][1]).length;
};

const sumFunc = (num) => {
	const arr = num.toString().split('');
	let res = 0;
	for (let i = 0; i < arr.length; i++) {
		res += Number(arr[i]);
	}
	console.log(res);
	return res;
};

console.log(countLargestGroup(24));
