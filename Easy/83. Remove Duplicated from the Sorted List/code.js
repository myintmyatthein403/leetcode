/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  // If the list is empty or contains only one node, return the head
  if (!head || !head.next) return head;

  // Start from the head of the list
  let current = head;

  // Traverse the list
  while (current && current.next) {
    // If the current node's value is the same as the next node's value
    if (current.val === current.next.val) {
      // Skip the next node by pointing current's next to next's next
      current.next = current.next.next;
    } else {
      // Otherwise, move to the next node
      current = current.next;
    }
  }

  // Return the head of the modified list
  return head;
};

