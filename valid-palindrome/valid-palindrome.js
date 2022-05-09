/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const regex = /[^A-Za-z0-9]/g;
  return s.toLowerCase().replace(regex, '').split('').reverse().join('') === s.toLowerCase().replace(regex, '')
    
};