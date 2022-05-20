/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let sign;
  nums = nums.sort((a, b) => a + b)
    for (let i = 0; i < nums.length; i++) {
      nums[i] *= nums[i]
    }
  return nums
};