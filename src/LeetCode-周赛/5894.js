/**
 * 5894. 至少在两个数组中出现的值
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
	set1 = new Set(nums1);
	set2 = new Set(nums2);
	set3 = new Set(nums3);
	let hashMap = new Map();
	[set1, set2, set3].forEach((set) => {
		for (let x of set) {
			hashMap.set(x, hashMap.has(x) ? hashMap.get(x) + 1 : 1);
		}
	});
	return Array.from(hashMap)
		.filter((x) => x[1] > 1)
		.map((y) => y[0]);
};
console.log(twoOutOfThree([1, 2, 2], [4, 3, 3], [5]));
