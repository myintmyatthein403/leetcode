### Explanation:

-   **ListNode class**: This is a helper class to create nodes in the linked list. Each node has a `val` and a pointer to the `next` node.
-   **mergeTwoLists function**: This function takes the heads of two linked lists (`list1` and `list2`) and merges them into one sorted linked list.
-   **Dummy node**: We use a dummy node to simplify the process of building the new list. The `current` pointer is used to build the merged list.

### Example outputs:

-   For `list1 = [1,2,4]` and `list2 = [1,3,4]`, the output is `[1,1,2,3,4,4]`.
-   For `list1 = []` and `list2 = []`, the output is `[]`.
-   For `list1 = []` and `list2 = [0]`, the output is `[0]`.

This solution runs in O(n + m) time, where n and m are the lengths of the two input lists, and uses O(1) extra space.
