/**
 * 1646. 获取生成数组中的最大值
 * 思路：动规
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
    let arr = Array.from(n + 1);
    arr[0] = 0; arr[1] = 1;
    let max = 0;
    if (n < 2) {
        return n;
    }
    for (let i = 2; i <= n; i++) {
        if (i % 2 === 0) {
            arr[i] = arr[i / 2];
        } else {
            arr[i] = arr[Math.floor(i / 2)] + arr[Math.ceil(i / 2)];
        }
        max = Math.max(max, arr[i]);
    }
    return max;
};