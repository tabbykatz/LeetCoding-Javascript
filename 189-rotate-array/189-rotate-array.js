/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k %= nums.length;
    let temp
    reverseIt(nums, 0, nums.length - 1)
    reverseIt(nums, 0, k - 1)
    reverseIt(nums, k, nums.length - 1)
  
    return nums
};

const reverseIt = (arr, start, end) => {
    while (start < end) {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp;
        start++;
        end--;
    }
}