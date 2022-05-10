/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
   // get length
  let length = 0;
  let headPtr = head
  while(headPtr !== null) {
    headPtr = headPtr.next;
    length++
  }
  console.log(length)
  
  if (length === n) return head.next;
  
  let currentNode = head
  let nodeBeforeRemoval = length - n -1
  for(let i = 0; i < nodeBeforeRemoval && currentNode.next != null; i++ ) {
    currentNode = currentNode.next; 
  }
  
  currentNode.next = currentNode.next.next || null
  return head
};