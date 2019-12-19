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
    let list = [];
    myMap.forEach((value) => {
        if (list.findIndex(x => x === value) === -1) {
            list.push(value);
        }
    });
    list.sort((a, b) => a - b);
    for (let i = 2; i <= list[list.length - 1]; i++) {
        if (list.every(x => x % i === 0)) {
            return true;
        }
    }
    return false;
};

console.log(hasGroupsSizeX([1]));