/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
    let myMap = new Map();
    for (let i = 0; i < deck.length; i++) {
        if (myMap.has(deck[i])) {
            myMap.set(deck[i], myMap.get(deck[i]) + 1);
        } else {
            myMap.set(deck[i], 1);
        }
    }
    console.log(myMap);
};

console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]));