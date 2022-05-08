/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */ [0,0,3,12]
const moveZeroes = (nums) => {
    let [left, right] = [0, 0];

    while (right < nums.length) {
        if (nums[right] === 0) {
            right++;
        } else {
                //swapper     
            [nums[right], nums[left]] = [nums[left], nums[right]] 
            left++;
            right++;
        }
    }
};