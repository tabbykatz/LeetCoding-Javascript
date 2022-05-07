/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let nums1map = {}
    for (let i = 0; i < nums1.length; i++) {
      if (!nums1map[nums1[i]]) {
        nums1map[nums1[i]] = 1;
      } else {
        nums1map[nums1[i]] += 1;
      }
    }
  console.log(nums1map)
  console.log(Object.keys(nums1map))
  let retVal = []
  for (let num of nums2) {
    console.log(num)
    if (Object.keys(nums1map).includes(String(num)) && nums1map[num] > 0) {
      retVal.push(num)
      nums1map[num] -= 1
    }
  }
  return retVal
};