/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function(digits) {
  let dest = digits;
  for (let i = dest.length - 1; i >= 0; i--) {
    if (dest[i] !== 9) {
      dest[i] = dest[i] + 1;
      dest.fill(0, i + 1, dest.length);
      return dest;
    }
  }
  if (dest === digits) {
    let res = Array(dest.length + 1).fill(0);
    res[0] = 1;
    return res;
  }
};

nums = [1, 2, 3];
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

const resp = plusOne(nums1);
console.log("resp", resp);
