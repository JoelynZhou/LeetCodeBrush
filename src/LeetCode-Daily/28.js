/**
 * 28. 实现 strStr()
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function (haystack, needle) {
	if (!needle) {
		return 0;
	}
	let compareIdx = 0;
    for (let i = 0; i < haystack.length; i++) {
		if (haystack[i] === needle[compareIdx]) {
			if (compareIdx === needle.length - 1) {
				return i - needle.length+1;
			} else {
				compareIdx++;
			}
        } else {
            i -= compareIdx;
            compareIdx = 0;
		}
	}
	return -1;
};

console.log(strStr("mississippi","issip"));
