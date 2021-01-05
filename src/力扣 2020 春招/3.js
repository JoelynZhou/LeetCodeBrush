/**
 * @param {number[][]} increase
 * @param {number[][]} requirements
 * @return {number[]}
 */
var getTriggerTime = function(increase, requirements) {
	let copyRequirements = JSON.parse(JSON.stringify(requirements));
	let resp = new Array(requirements.length).fill(-1); // 被触发的剧情次数统计
	let current = [ 0, 0, 0 ]; //当天的势力
	for (let i = 0; i < increase.length; i++) {
		current = [ current[0] + increase[i][0], current[1] + increase[i][1], current[2] + increase[i][2] ];
		copyRequirements.forEach((x, index) => {
			const temp = [];
			if (x.every((y) => y === 0)) {
				resp[index] = 0;
			} else if (resp[index] < 0) {
				if (current[0] >= x[0] && current[1] >= x[1] && current[2] >= x[2]) {
					resp[index] = i + 1;
				} else {
					temp.push(x);
				}
			}
			copyRequirements = temp;
		});
	}
	return resp;
};
console.log(
	getTriggerTime(
		[ [ 2, 8, 4 ], [ 2, 5, 0 ], [ 10, 9, 8 ] ],
		[ [ 0, 0, 0 ], [ 15, 10, 7 ], [ 9, 17, 12 ], [ 8, 1, 14 ] ]
	)
);
