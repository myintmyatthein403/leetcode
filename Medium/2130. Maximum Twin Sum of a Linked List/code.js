/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  if (!head || !head.next) {
    return 0;
  }

  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let current = slow;
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  let maxSum = 0;
  let firstHalf = head;
  let secondHalf = prev;

  while (firstHalf && secondHalf) {
    maxSum = Math.max(maxSum, firstHalf.val + secondHalf.val);
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }

  return maxSum;
};

// For Example
const head = {
  val: 5,
  next: {
    val: 4,
    next: {
      val: 3,
      next: {
        val: 1,
        next: null,
      },
    },
  },
};

console.log(pairSum(head)); // Output: 2 -> 4 -> 6
