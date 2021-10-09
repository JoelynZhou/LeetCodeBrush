/**
 * 231. 2 的幂
 * 思路 1. 常规思路 + 边界判断
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n<=0) {
        return false;
    }
    while (n > 1) {
        const str = String(n);
        if (Number(str[str.length - 1]) % 2 === 1) {
            return false;
        } else {
            n = n / 2;
        }
    }
    return true;
};

/**
 * 231. 2 的幂
 * 思路 1. 位运算
 * 若 n 是 2 的幂，则 n 二进制一定表示为 1000…00，n-1 一定标识为 0111…11，则 n & n-1 = 0 必然成立
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo2 = function (n) {
    if (n<=0) {
        return false;
    }
    console.log(n & (n - 1),n & (n - 1)===0)
    return (n & (n - 1)) === 0;
};

console.log(isPowerOfTwo2(16))