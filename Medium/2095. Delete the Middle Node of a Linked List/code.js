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
var deleteMiddle = function (head) {
  if (!head || !head.next) {
    return null;
  }
  let fast = head;
  let slow = head;
  let prev = null;

  while (fast && fast.next) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }

  prev.next = slow.next;

  return head;
};

// For Example
const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};

const head2 = {
  val: 1,
}
console.log(deleteMiddle(head)); // Output: 1 -> 2 -> 4 -> 5
console.log(deleteMiddle(head2)); // Output:

