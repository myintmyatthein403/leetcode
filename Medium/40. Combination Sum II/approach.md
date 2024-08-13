-   **Backtracking Function:** Define a backtracking function that explores all potential combinations. This function will try to add each candidate to the current combination and recurse with the remaining candidates.
    
-   **Base Cases:**
    
    -   If the target is zero, add the current combination to the result.
    -   If the target is negative, return early since the combination can't be valid.
-   **Avoiding Duplicates:** Skip over duplicate numbers by checking if the current number is the same as the previous one (this only applies after the first element).
