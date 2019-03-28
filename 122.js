/**
 * 122. Best Time to Buy and Sell Stock II
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    const range = prices[i] - prices[i - 1];
    if (range > 0) {
      profit += range;
    }
  }
  return profit;
};

const input = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(input));
