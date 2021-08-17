/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
	let cntA = 0;
	let cntL = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "A") {
			cntA++;
			if (cntA === 2) {
				return false;
			}
		}
		if (s[i] === "L") {
			cntL++;
			if (cntL === 3) {
				return false;
			}
		} else {
			cntL = 0;
		}
	}
	return true;
};
