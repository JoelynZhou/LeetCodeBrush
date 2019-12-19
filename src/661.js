/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
    let N = [];
    if (M.length === 0) {
        return M;
    } else if (M.length === 1) {
        let arr = [];
        for (let j = 0; j < M[0].length; j++) {
            if (j === 0 || j === M[0].length - 1) {
                // 首尾两个顶角
                arr[j] = Math.floor((M[0][j] + M[0][Math.abs(j - 1)]) / 2);
            } else {
                // 中间区域
                arr[j] = Math.floor((M[0][j - 1] + M[0][j] + M[0][j + 1]) / 3);
            }
        }
        N.push(arr);
        return N;
    } else if (M[0].length === 1) {
        for (let i = 0; i < M.length; i++) {
            let arr = [];
            if (i === 0 || i === M.length - 1) {
                // 上下两个顶角
                arr[0] = Math.floor((M[i][0] + M[Math.abs(i - 1)][0]) / 2);
            } else {
                // 中间区域
                arr[0] = Math.floor((M[i - 1][0] + M[i][0] + M[i + 1][0]) / 3);
            }
            N.push(arr);
        }
        return N;
    } else {
        for (let i = 0; i <= M.length - 1; i++) {
            let arr = [];
            for (let j = 0; j <= M[0].length - 1; j++) {
                if (i === 0 || i === M.length - 1) {
                    if (j === 0 || j === M[0].length - 1) {
                        // 四个顶角
                        arr[j] = Math.floor(
                            (M[i][j] +
                                M[i][Math.abs(j - 1)] +
                                M[Math.abs(i - 1)][j] +
                                M[Math.abs(i - 1)][Math.abs(j - 1)]) /
                            4
                        );
                    } else {
                        // 上下边
                        arr[j] = Math.floor(
                            (M[i][j - 1] +
                                M[i][j] +
                                M[i][j + 1] +
                                M[Math.abs(i - 1)][j - 1] +
                                M[Math.abs(i - 1)][j] +
                                M[Math.abs(i - 1)][j + 1]) /
                            6
                        );
                    }
                } else {
                    if (j === 0 || j === M[0].length - 1) {
                        // 左右边
                        arr[j] = Math.floor(
                            (M[i - 1][j] +
                                M[i][j] +
                                M[i + 1][j] +
                                M[i - 1][Math.abs(j - 1)] +
                                M[i][Math.abs(j - 1)] +
                                M[i + 1][Math.abs(j - 1)]) /
                            6
                        );
                    } else {
                        // 中间区域
                        arr[j] = Math.floor(
                            (M[i - 1][j - 1] +
                                M[i - 1][j] +
                                M[i - 1][j + 1] +
                                M[i][j - 1] +
                                M[i][j] +
                                M[i][j + 1] +
                                M[i + 1][j - 1] +
                                M[i + 1][j] +
                                M[i + 1][j + 1]) /
                            9
                        );
                    }
                }
            }
            N.push(arr);
        }
        return N;
    }
};

console.log(imageSmoother(
    [
        [3],
        [2]
    ]))