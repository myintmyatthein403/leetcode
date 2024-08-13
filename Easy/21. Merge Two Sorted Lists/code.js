/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // Initialize a dummy node to hep with the merge process
  let dummy = new ListNode();
  let current = dummy

  // Traverse both lists and merge them
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1
      list1 = list1.next
    } else {
      current.next = list2
      list2 = list2.next
    }
    current = current.next;
  }

  // If there are remaining nodes in list1 or list2, append then
  if (list1 !== null) {
    current.next = list1
  } else if (list2 !== null) {
    current.next = list2
  }

  // Return the merged list starting from the node after dummy
  return dummy.next
};

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}


// Example 1:
let list1 = createLinkedList([1, 2, 4]);
let list2 = createLinkedList([1, 3, 4]);
let mergedList = mergeTwoLists(list1, list2);
console.log(mergedList)
// Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4

// Example 2:
list1 = createLinkedList([]);
list2 = createLinkedList([]);
mergedList = mergeTwoLists(list1, list2);
console.log(mergedList)
// Output: []

// Example 3:
list1 = createLinkedList([]);
list2 = createLinkedList([0]);
mergedList = mergeTwoLists(list1, list2);
console.log(mergedList)
// Output: 0
