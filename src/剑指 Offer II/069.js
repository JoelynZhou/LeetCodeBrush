/**
 * 剑指 Offer II 069. 山峰数组的顶部
 * 思路1：顺序遍历,O(n)
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i + 1]) {
			return i;
		}
	}
	return -1;
};

/**
 * 剑指 Offer II 069. 山峰数组的顶部
 * 思路2：二分,O(logN)
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray2 = function (arr) {};
