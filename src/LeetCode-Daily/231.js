/**
 * 231. 2 的幂
 * 边界判断
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
console.log(isPowerOfTwo(12))