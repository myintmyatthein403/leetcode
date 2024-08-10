
// Definition for a singly linked list node.
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;  // The value of the node
    this.next = next;  // The reference to the next node
  }
}

// Function to add two numbers represented by linked lists
function addTwoNumbers(l1, l2) {
  // Create a dummy head node to simplify edge cases and initialization
  let dummyHead = new ListNode(0);

  // Pointer to the current position in the result list
  let current = dummyHead;

  // Variable to keep track of carry between additions
  let carry = 0;

  // Loop until both l1 and l2 are fully traversed
  while (l1 !== null || l2 !== null) {
    // Get the current value from l1; if l1 is null, use 0
    let x = (l1 !== null) ? l1.val : 0;

    // Get the current value from l2; if l2 is null, use 0
    let y = (l2 !== null) ? l2.val : 0;

    // Calculate the sum of the two digits and the carry
    let sum = carry + x + y;

    // Update the carry for the next iteration (1 if the sum is 10 or more)
    carry = Math.floor(sum / 10);

    // Create a new node with the digit value (sum % 10) and attach it to the current node
    current.next = new ListNode(sum % 10);

    // Move the current pointer to the next node
    current = current.next;

    // Move l1 and l2 to the next nodes, if they exist
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  // After the loop, if there is any carry left, add a new node for it
  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  // Return the next of dummyHead, which is the actual head of the result linked list
  return dummyHead.next;
}

// Example usage:

// Creating linked list for number 342: [2 -> 4 -> 3]
const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));

// Creating linked list for number 465: [5 -> 6 -> 4]
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

// Adding the two numbers
const result = addTwoNumbers(l1, l2);

// Convert the result linked list to an array for easy viewing
let output = [];
while (result !== null) {
  output.push(result.val);  // Add the value of the current node to the output array
  result = result.next;  // Move to the next node
}

console.log(output);  // Expected Output: [7, 0, 8]

