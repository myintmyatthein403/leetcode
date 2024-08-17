### Approach

1.  **Iterate through the linked list**:
    
    -   Traverse the linked list starting from the `head`.
    -   For each node, check if its value is the same as the next node's value.
    -   If they are the same, skip the next node by pointing the current node's `next` pointer to the next node's `next` pointer. This effectively removes the duplicate node from the list.
2.  **Continue until the end of the list**:
    
    -   Keep moving the pointer forward until you reach the end of the linked list.
3.  **Return the modified list**:
    
    -   After all duplicates have been removed, return the `head` of the modified linked list.
