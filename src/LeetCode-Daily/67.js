/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
     let res = [];
     let i = a.length-1;
     let j = b.length - 1;
     let mark = 0;
     while (i >= 0 || j >= 0) {
         let total = Number((a[i] || 0)) +Number( (b[j] || 0)) + Number(mark);
        res.unshift(total%2);
        mark = Math.floor(total/2);
        i--; j--;
     }
     if (mark > 0) {
         res.unshift(mark);
     }
     return res.join("");
 };

 console.log(addBinary("11","1"))