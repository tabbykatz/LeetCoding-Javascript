/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let currMax = 0;
  for (let num of nums) {
    //console.log(num)
    if (num === 1) {
      currMax += 1
      console.log(currMax)
      continue
    } else {
      max = Math.max(currMax, max)
      currMax = 0;
      
    }
  }
  
  max = Math.max(currMax, max)
  return max
};