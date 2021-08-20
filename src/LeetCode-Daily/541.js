/**
 * 541. 反转字符串 II
 * 思路：数学+双指针
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let arr = Array.from(s);
    let n = 0;
    while (n * 2 * k < s.length - 1) {
        let left = n * 2 * k;
        let right = Math.min(left + k - 1, s.length - 1);
        reverse(arr, left, right);
        n++;
    }
    return arr.join("");
};

let reverse = function (arr,i, j) {
    while (i < j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++; j--;
    }
}

console.log(reverseStr("abcdefgabcdefg", 4));