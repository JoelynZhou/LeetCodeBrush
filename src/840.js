/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
  let num = 0;
  if (grid.length < 3 || grid.some(r => r.length < 3)) {
    return num;
  }
  for (let i = 0; i < grid.length - 2; i++) {
    for (let j = 0; j < grid[i].length - 2; j++) {
      const square = [
        grid[i][j],
        grid[i][j + 1],
        grid[i][j + 2],
        grid[i + 1][j],
        grid[i + 1][j + 1],
        grid[i + 1][j + 2],
        grid[i + 2][j],
        grid[i + 2][j + 1],
        grid[i + 2][j + 2]
      ];
      if (
        square.some(x => x < 1 || x > 9) ||
        Array.from(new Set(square)).length < 9 ||
        square[4] !== 5
      ) {
        continue;
      }
      if (
        2 * square[0] + square[1] + square[3] + 2 * square[4] ===
        2 * (square[0] + square[1] + square[2])
      ) {
        num++;
      }
    }
  }
  return num;
};

const resp = numMagicSquaresInside([
  [7, 0, 5],
  [2, 4, 6],
  [3, 8, 1]
]);
console.log(resp);
