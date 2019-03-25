/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let [i, j] = [0, 0];
  while (i < nums1.length && j < nums2.length) {
    if (nums2[j] > nums1[i]) {
      console.log("i,j,nums1[i],nums2[j]", i, j, nums1[i], nums2[j]);
      nums1 = nums1.slice(i, 0, nums2[j]);
      console.log("nums1", nums1);
      j++;
    } else if (nums2[j] >= nums1[i]) {
      i++;
    }
  }
  console.log(nums1);
  //   return dest.concat(nums1.slice(i), nums2.slice(j));
};

const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];
const [m, n] = [3, 3];
console.log(merge(nums1, m, nums2, n));
