/**
 * 350. 两个数组的交集 II
 * 借助 hash 表
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function (nums1, nums2) {
    let map1 = formatMap(nums1);
    let map2 = formatMap(nums2);
    return getSame(nums1.length < nums2.length ? nums1:nums2);

    function formatMap(arr) {
        let hashMap = new Map();
        for (let i = 0; i < arr.length; i++) {
            if (hashMap.has(arr[i])) {
                hashMap.set(arr[i], hashMap.get(arr[i])+1);
            } else {
                hashMap.set(arr[i], 1);
            }
        }
        return hashMap;
    }

    function getSame(arr) {
        let res = [];
        for (let i = 0; i < arr.length; i++) {
            let cnt1 = map1.get(arr[i]);
            let cnt2 = map2.get(arr[i]);
            if (cnt1 > 0 && cnt2 > 0) {
                res.push(arr[i]);
                map1.set(arr[i], --cnt1);
                map2.set(arr[i], --cnt2);
            }
        }
        return res;
    }
};


console.log(intersect([1, 2], [1,1]));
