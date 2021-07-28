/**
 * 463. 岛屿的周长
 * 思路：遍历所有的边
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    let cnt = 0;
     for (let i = 0; i < grid.length; i++) {
         for (let j = 0; j < grid[0].length; j++) {
             if (i === 0 && grid[i][j]===1) {
                 cnt++;
             }
             if (j === 0 && grid[i][j]===1) {
                 cnt++;
             }
             if (grid[i][j] ^ grid[i+1]?.[j]) {
                 cnt++;
             }
             if (grid[i][j] ^ grid[i]?.[j+1]) {
                cnt++;
            }
         }
     }
    return cnt;
};
console.log(islandPerimeter([[1,0]]))