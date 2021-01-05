var numberOfSubarrays = function(nums, k) {
	let count = 0;
	let arr = []; // 用于放置奇数下标
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] % 2 === 1) {
			arr.push(i);
		}
	}
	if (arr.length < k) {
		return count;
	}
	console.log(arr);
	for (let i = 0; i + k - 1 < arr.length; i++) {
		const j = i + k - 1; // 左下标 i，右下标 i+k-1
		const left = i === 0 ? arr[i] + 1 : arr[i] - arr[i - 1];
		const right = j === arr.length - 1 ? nums.length - arr[j] : arr[j + 1] - arr[j];
		count += left * right;
	}
	return count;
};
