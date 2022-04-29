/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1
    
    while (left <= right) {
      const pivot = Math.floor((left + right) / 2);
      const current = nums[pivot]
      
      if (current > target) {
        right = pivot - 1
      } else if (current < target) {
        left = pivot + 1
      } else {
        return pivot;
      }
      
    }
    
  return -1;
};