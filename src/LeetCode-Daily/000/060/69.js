/**
 * 69. x 的平方根
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
     let left = 0;
     let right = x;
     let mid = 0;
     if (x <= 1) {
         return x;
     }
     while (left <= right) {
        mid = Math.floor((left + right+1) / 2);
         if (left === right) {
             return mid;
         }
         if (Math.pow(mid, 2) < x) {
             left = mid;
         } else if (Math.pow(mid, 2) > x) {
             right = mid-1;
         } else {
             return mid;
         }
     }
     return mid;
 };
console.log(mySqrt(2))