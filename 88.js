/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let [i, j, k] = [m - 1, n - 1, m + n - 1];
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
};

const nums1 = [0];
const nums2 = [1];
const [m, n] = [0, 1];
console.log(merge(nums1, m, nums2, n));
