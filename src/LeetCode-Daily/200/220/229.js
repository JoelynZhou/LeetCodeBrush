/**
 * 229. 求众数 II
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
	const cnt = Math.floor(nums.length / 3 + 1);
	let hashMap = new Map();
	let res = [];
	for (let i = 0; i < nums.length; i++) {
		hashMap.set(
			nums[i],
			hashMap.has(nums[i]) ? hashMap.get(nums[i]) + 1 : 1
		);
	}
	hashMap.forEach((val, key) => {
		if (val >= cnt) {
			res.push(key);
		}
	});
	return res;
};
console.log(majorityElement([1]));
