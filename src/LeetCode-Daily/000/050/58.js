/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let findWord = false;
    let cnt = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== " ") {
            findWord = true;
            cnt++;
        } else if(findWord) {
            return cnt;
        }
    }
    return cnt;
};

console.log(lengthOfLastWord("asa"));