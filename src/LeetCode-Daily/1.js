/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let hashMap = new Map();
	for (let i = 0; i < nums.length; i++) {
		hashMap.set(nums[i], i);
	}
	for (let j = 0; j < nums.length; j++) {
		const numToFind = target - nums[j];
		if (hashMap.has(numToFind) && j !== hashMap.get(numToFind)) {
			//hash里存在匹配的数据，且不是自身
			return [j, hashMap.get(numToFind)];
		}
	}
	return null;
};

const resp = twoSum([1, 2, 3, 4], 6);
console.log("resp", resp);
