/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
    let land = []; // 陆地源数组
    let level = 0; // 返回层级
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                land.push([i, j]);
            }
        }
    }
    let ocean = grid.length * grid.length - land.length; // 海洋的格数
    // 全是海洋或者陆地，返回 -1
    if (land.length === 0 || ocean === 0) {
        return -1;
    }
    while (ocean > 0) {
        level++;
        const temp = [];
        for (let i = 0; i < land.length; i++) {
            const [x, y] = [land[i][0], land[i][1]];
            // 判断 上下左右 相邻的点是否有海洋
            for (let j = 0; j < 4; j++) {
                // 边界条件校验
                if (
                    x + dx[j] < 0 ||
                    y + dy[j] < 0 ||
                    x + dx[j] > grid.length - 1 ||
                    y + dy[j] > grid[0].length - 1
                ) {
                    continue;
                }
                // 如果发现是海洋，则标记 2（这里其实只要是非 0，其他数都可以，只为了跟未知海洋作区分），防止被重复计算
                if (grid[x + dx[j]][y + dy[j]] === 0) {
                    grid[x + dx[j]][y + dy[j]] = 2;
                    temp.push([x + dx[j], y + dy[j]]);
                    // 每发现一个新海洋，剩下的海洋格数就减少 1
                    ocean--;
                }
            }
        }
        land = temp; // 一轮扩散结束后，新扩散将代替源陆地存入 land，开始新的一轮扩散
    }
    return level;
};
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];




const resp = maxDistance([
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1]
]);
console.log(resp);
