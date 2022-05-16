/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head === null) {
    return false
  }
    let tortoise = head
    let hare = head.next
    while (tortoise !== hare) {
      if (hare === null || hare.next === null) {
        return false
      }
      tortoise = tortoise.next
      hare = hare.next.next
    }
  return true
    
};