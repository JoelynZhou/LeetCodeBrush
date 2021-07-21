/**
 * 13. 罗马数字转整数
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	const list = [
		{ char: "I", num: 1 },
		{ char: "V", num: 5 },
		{ char: "X", num: 10 },
		{ char: "L", num: 50 },
		{ char: "C", num: 100 },
		{ char: "D", num: 500 },
		{ char: "M", num: 1000 },
    ];
    function getCharNum(char) {
        return char? list.find(x => x.char === char).num:null;
    }
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const curr = getCharNum(s[i]);
        const next = getCharNum(s[i + 1]);
        if (curr >= next || !next) {
            total += curr;
        } else {
            total -= curr;
        }
    }
    return total;
};
