/**
 * 5888. 网络空闲的时刻
 * @param {number[][]} edges
 * @param {number[]} patience
 * @return {number}
 */
var networkBecomesIdle = function (edges, patience) {
	let routes = new Array(patience.length);
	routes[0] = 0;
	let hashMap = new Map();
	edges.forEach((arr) => {
		if (!hashMap.has(arr[0])) {
			hashMap.set(arr[0], [arr[1]]);
		} else {
			hashMap.set(arr[0], [...hashMap.get(arr[0]), arr[1]]);
		}
	});
	let step = 0;
	while (routes.some((x) => !x) && hashMap.get(step)) {
		const targets = hashMap.get(step) || [];
		targets.forEach((x) => {
			if (!routes[x]) {
				routes[x] = step + 1;
			}
		});
		step++;
	}
	console.log("routes", routes);
	// todo
};
console.log(
	networkBecomesIdle(
		[
			[0, 1],
			[0, 2],
			[1, 2],
		],
		[0, 10, 10]
	)
);
