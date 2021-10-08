/**
 * 1436. 旅行终点站
 * 思路：哈希表
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
	let hashSet = new Set();
	let dest = null;
	paths.forEach((path) => {
		hashSet.add(path[0]);
	});
	paths.forEach((path) => {
		if (!hashSet.has(path[1])) {
			dest = path[1];
		}
	});
	return dest;
};

console.log(
	destCity([
		["London", "New York"],
		["New York", "Lima"],
		["Lima", "Sao Paulo"],
	])
);
