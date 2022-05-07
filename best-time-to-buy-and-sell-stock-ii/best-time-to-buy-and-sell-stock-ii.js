/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let i = 0;
    let total = 0;
    let valley = 10001;
    let peak = valley
    for (i; i < prices.length; i++) {
        if (prices[i] < peak) {
            total += peak - valley
            valley = prices[i]
            peak = valley
        } else 
            peak = prices[i]
        
    }
    total += peak - valley
    return total
};