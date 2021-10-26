/**
 * 496. 下一个更大元素 I
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 思路：哈希+单调栈
 */
var nextGreaterElement = function (nums1, nums2) {
	const map = new Map(); //存放键值对
	const stack = []; //单调栈
	for (let i = nums2.length - 1; i >= 0; --i) {
		const num = nums2[i];
		console.log("num:", num);
		while (stack.length && num >= stack[stack.length - 1]) {
			stack.pop();
			console.log("stack pop", stack);
		}
		map.set(num, stack.length ? stack[stack.length - 1] : -1);
		console.log("map", map);
		stack.push(num);
		console.log("stack push", stack);
	}
	const res = new Array(nums1.length)
		.fill(0)
		.map((_, i) => map.get(nums1[i]));
	return res;
};
console.log(
	nextGreaterElement([1, 2, 3, 4, 5, 6, 7, 8], [2, 5, 3, 6, 8, 4, 7, 1])
);
