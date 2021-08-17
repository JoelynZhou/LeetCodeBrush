/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let cntA = 0;
    let cntL = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "A") {
            cntA++;
        }
        if (s[i] === "L") {
            cntL++;
        } else {
            cntL = 0;
        }
        if (cntA === 2 || cntL === 3) {
            return false;
        }
    }
    return true;
};