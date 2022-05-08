/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//[3,2,4]
var twoSum = function(nums, target) {
const lookup = new Map();

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    const complement = target - number;
    if (lookup.has(complement)) {
      return [lookup.get(complement), i ];
    } else {
      lookup.set(number, i);
    }
  }
};