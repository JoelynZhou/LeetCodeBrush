/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let [i, j] = [0, height.length - 1];
    let maxArea = 0;
    while (i < j) {
        maxArea = Math.max(maxArea, (j - i) * Math.min(height[i], height[j]));
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return maxArea;
};

const input = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(input));