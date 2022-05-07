/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let insert = 1;
    let index = 1;
    for (index; index < nums.length; index++) {
        if (nums[index] != nums[index - 1]) {
          nums[insert] = nums[index]
            insert++
        }
        
    }
    return insert;
};

// [1,1,2]
