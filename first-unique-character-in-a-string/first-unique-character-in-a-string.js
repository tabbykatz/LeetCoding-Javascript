/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
   for (let i = 0; i < s.length; i++) {
     let letter = s[i]
     let re = new RegExp(letter, 'g');
     if (s.match(re).length === 1) {
       return i
     }
    
   }
  return -1 
};
