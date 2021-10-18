/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function (colors) {
	let cnta = 0;
	let cntb = 0;
	colorsA = colors.match(/A{3,}/g) || [];
	colorsB = colors.match(/B{3,}/g) || [];
	colorsA.forEach((arr) => {
		cnta += Math.max(arr.length - 2, 0);
	});
	colorsB.forEach((arr) => {
		cntb += Math.max(arr.length - 2, 0);
	});
	return cnta > 0 && cnta > cntb;
};
console.log(winnerOfGame("AAAAABBBBBBAAAAA"));
