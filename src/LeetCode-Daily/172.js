/**
 * 172. 阶乘后的零
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    // let twos = 0;
    let fives = 0;
    function countFive(num) {
        while (num>0 && num % 5 === 0) {
            fives++;
            num=Math.floor(num / 5);
        }
    }
    // function countTwo(num) {
    //     while (num>0 && num % 2 === 0) {
    //         twos++;
    //         num=Math.floor(num / 2);
    //     }
    // }
    for (let i = 1; i <= n; i++) {
        countFive(i);
        // countTwo(i);
    }
    return fives;
    // return Math.min(twos,fives);
};



