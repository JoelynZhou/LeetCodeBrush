var maxDistToClosest = function (seats) {
    let mid = 0;
    let count = 0;
    const firstOne = seats.indexOf(1);
    const lastOne = seats.lastIndexOf(1);
    const eage = Math.max(firstOne, seats.length - 1 - lastOne);
    for (let i = firstOne; i <= lastOne; i++) {
        if (seats[i] === 1) {
            mid = Math.max(mid, count);
            count = 0;
        } else {
            count++;
        }
    }
    return Math.max(eage, Math.floor(mid / 2) + 1);
};

console.log(maxDistToClosest([1, 0, 0, 0, 1, 0, 1]));