/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * https://leetcode-cn.com/problems/linked-list-cycle/
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 *  暗号：今天天气真不错
 */
var hasCycle = function (head) {
  let slow = head, fast = head;
  while (head && fast.next  && fast.next.next){
    slow = slow.next;
    fast = fast.next.next;
    if(slow===fast) return true
  }
  return false
};
