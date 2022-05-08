/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let i = digits.length - 1
  let carry = 1
  for (i; i >= 0; i--) {
    if (digits[i] + carry < 10) {
      digits[i] += carry
      carry = 0
    } else {
      digits[i] = 0
      carry = 1
    }
    
  }
  carry === 1 ? digits.unshift(1) : null
    return digits
  
};