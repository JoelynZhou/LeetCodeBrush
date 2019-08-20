/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function (digits) {
    let dest = digits;
    for (let i = dest.length - 1; i >= 0; i--) {
        if (dest[i] !== 9) {
            // 方案1：
            dest[i] = dest[i] + 1;
            //   for (let j = i + 1; j < dest.length; j++) {
            //     dest[j] = 0;
            //   }
            // 方案2：
            dest.fill(0, i + 1, dest.length);
            return dest;
        }
    }
    if (dest === digits) {
        // // 方案1：
        // return Math.pow(10, dest.length)
        //   .toString()
        //   .split(""); // 不可行，数值非常大的时候，Math.pow()计算结果会采用科学计数法
        // 方案2：
        let res = Array(dest.length + 1).fill(0);
        res[0] = 1;
        return res;
    }
    return null;
};

const nums1 = [
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9,
    9
];
const dest = plusOne(nums1);
console.log("dest", dest);