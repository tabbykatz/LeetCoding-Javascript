/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const seen = {}
    for (let i = 0; i < nums.length; i++) {
        if (!seen[nums[i]]) {
            seen[nums[i]] = 1
        } else {
            seen[nums[i]] += 1
        }
    }
    
    return Object.keys(seen).filter(key => seen[key] < 2)[0]

    
};