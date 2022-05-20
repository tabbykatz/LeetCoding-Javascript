/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  let count = 0
    for (let num of nums) {
      console.log(num)
      if (String(num).length % 2 === 0) {
        count += 1
      }
    }
  return count
};