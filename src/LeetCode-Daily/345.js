/**
 * 345. 反转字符串中的元音字母
 * 思路：双指针
 * @param {string} s
 * @return {string}
 */
let reverseVowels = function (s) {
    let arr = Array.from(s);
	let i = 0;let j = s.length - 1;
    while (i < j) {
        if (isVowels(arr[i]) && isVowels(arr[j])) {
			const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            console.log(arr,i,j,temp)
			i++;
            j--;

        }
		if (!isVowels(arr[i])) {
			i++;
		}
		if (!isVowels(arr[j])) {
			j--;
		}
	}
	return arr.join("");
};

let isVowels = function (n) {
	return "aeiou".indexOf(n.toLocaleLowerCase())>-1;
};
console.log(reverseVowels("hello"));
