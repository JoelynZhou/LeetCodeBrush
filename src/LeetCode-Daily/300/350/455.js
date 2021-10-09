/**
 * 455. 分发饼干
 * 思路：优先满足胃口最小的孩子们
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
 var findContentChildren = function(g, s) {
     g = g.sort((a, b) => a - b);
     s = s.sort((a, b) => a - b);
     let cnt = 0;
     let i = 0; j = 0;
     while (j < s.length) {
         if (s[j] >= g[i]) {
             i++;//第 i 个孩子被满足
             j++;//饼干分给第 i 个孩子
             cnt++;
         } else {
             j++;//饼干浪费了，连最小胃口的孩子都满足不了
         }
     }
     return cnt;
 };
console.log(findContentChildren([1,2],[1,2,3]))