/**
 * 买股票问题
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]; //找出相对情况下的最低价，最低价不一定是买入价，因为后面的涨幅可能不及之前
        } else if (prices[i] - min > profit) {
            profit = prices[i] - min; //一旦新的收益大于原先收益就更新收益，其实这时候才坐实了之前的最低价是买入的正确时刻
        }
    }
    return profit;
};

const input = [7, 1, 5, 3, 6, 4];
maxProfit(input);
