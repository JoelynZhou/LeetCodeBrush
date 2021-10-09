/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
	let cnt = 0;

	const validPalindrome2 = (s, cnt) => {
		let i = 0;
		let j = s.length - 1;
		while (i < j) {
			if (s[i] !== s[j]) {
				if (cnt === 1) {
					return false;
				}
				return (
					validPalindrome2(s.substring(i, j), cnt + 1) || validPalindrome2(s.substring(i + 1, j + 1), cnt + 1)
				);
				if (s[i] === s[j - 1]) {
					if (validPalindrome2(s.substring(i, j), 1)) {
						return true;
					}
				}
				if (s[i + 1] === s[j]) {
					return validPalindrome2(s.substring(i + 1, j + 1), 1);
				}
				return false;
			}
			i++;
			j--;
		}
		return true;
	};

	return validPalindrome2(s, cnt);
};

const test = 'ceccece';
console.log(validPalindrome(test));
