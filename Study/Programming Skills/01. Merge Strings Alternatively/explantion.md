### Real World Example of Usage for `mergeAlternately`

The `mergeAlternately` function can be applied in various real-world scenarios where you need to merge two sequences of characters or data in an alternating fashion. Here are two examples:

#### Example 1: Interleaving Messages

**Scenario**:
You are developing a chat application where two users are sending messages to each other. For a special feature, you want to create a single message that interleaves the characters of the two users' messages. This can be used to create a fun, combined message that alternates between the characters of each user's message.

**Input**:
- `word1`: A string representing the first user's message.
- `word2`: A string representing the second user's message.

**Example**:
```javascript
const user1Message = "hello";
const user2Message = "world";
console.log(mergeAlternately(user1Message, user2Message)); // Output: "hweolrllod"
```

**Explanation**:
- The function merges the two messages by alternating characters from each message, resulting in the combined message "hweolrllod".

#### Example 2: Merging Data Streams

**Scenario**:
You are working on a data processing system that receives two streams of data. For certain operations, you need to merge these two streams into a single stream by alternating elements from each stream. This can be useful for combining data from two different sources in a balanced way.

**Input**:
- `word1`: A string representing the first data stream.
- `word2`: A string representing the second data stream.

**Example**:
```javascript
const dataStream1 = "12345";
const dataStream2 = "abcde";
console.log(mergeAlternately(dataStream1, dataStream2)); // Output: "1a2b3c4d5e"
```

**Explanation**:
- The function merges the two data streams by alternating elements from each stream, resulting in the combined stream "1a2b3c4d5e".

### Visualization of the Code

Let's visualize the process with the example of interleaving messages:

- **User 1 Message (`word1`)**: `"hello"`
- **User 2 Message (`word2`)**: `"world"`

- **Merging Process**:
  - Initialize `result` as an empty string.
  - Iterate through the characters of both messages, adding characters alternately to `result`:
    - `h` from `word1`
    - `w` from `word2`
    - `e` from `word1`
    - `o` from `word2`
    - `l` from `word1`
    - `r` from `word2`
    - `l` from `word1`
    - `l` from `word2`
    - `o` from `word1`
    - `d` from `word2`

- **Final Result**:
  - The combined message is `"hweolrllod"`.

### Example Usage in a Real World Scenario
```javascript
console.log(mergeAlternately("hello", "world")); // Output: "hweolrllod"
console.log(mergeAlternately("12345", "abcde")); // Output: "1a2b3c4d5e"
console.log(mergeAlternately("abc", "pqr")); // Output: "apbqcr"
console.log(mergeAlternately("ab", "pqrs")); // Output: "apbqrs"
console.log(mergeAlternately("abcd", "pq")); // Output: "apbqcd"
```
- These examples demonstrate how the function can be used to interleave characters from two messages or data streams, creating a combined result that alternates between the characters of each input. 
