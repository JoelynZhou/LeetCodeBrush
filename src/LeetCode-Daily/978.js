/**
 * @param {number[]} arr
 * @return {number}
 * 方案 1：双指针
 * 时间复杂度：O(N)
 * 空间复杂度：O(1)
 */
var maxTurbulenceSize = function(arr) {
	let ret = 1; // 记录当前最大的湍流子数组长度
	let left = 0,
		right = 0;
	if (arr.length === 1) {
		return ret;
	}
	while (right <= arr.length - 1) {
		if (left === right) {
			if (arr[left] === arr[left + 1]) {
				left++;
			}
			right++;
		} else {
			if (arr[right] > arr[right - 1] && arr[right] > arr[right + 1]) {
				//峰
				right++;
			} else if (arr[right] < arr[right - 1] && arr[right] < arr[right + 1]) {
				//谷
				right++;
			} else {
				ret = Math.max(ret, right - left + 1);
				left = right;
			}
		}
	}
	return ret;
};
console.log(maxTurbulenceSize([ 9, 4, 2, 10, 7, 8, 8, 1, 9 ]));
// console.log(maxTurbulenceSize([ 0, 8, 45, 88, 48, 68, 28, 55, 17, 24 ]));
