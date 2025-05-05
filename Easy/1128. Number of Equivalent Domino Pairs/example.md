Here are **2 real-world examples** and **1 web development example** where the concept of **counting equivalent pairs with unordered properties** (like the domino pairs problem) is used:

---

### ✅ **Real-World Example 1: Matching Socks in a Laundry Factory**

**Scenario:**
A sock-sorting machine processes pairs of socks. Each sock is labeled with a color code. The machine must count how many valid pairs it can form, regardless of the order they come in.

**Similarity to the problem:**

* A sock pair `[blue, red]` is equivalent to `[red, blue]`.
* Normalize the color codes and count how many matching pairs exist.
* Optimizing the count helps speed up sorting and packaging.

---

### ✅ **Real-World Example 2: Duplicate Chemical Bond Types in Molecular Structures**

**Scenario:**
In molecular modeling, chemical bonds between atoms are often considered undirected — a bond between Carbon and Oxygen is the same as one between Oxygen and Carbon.

**Similarity to the problem:**

* Bond `[C, O]` ≡ `[O, C]`.
* Chemists or software may need to count how many times a specific type of bond occurs, regardless of order.
* Helps in analyzing molecular stability or visualizing bonding patterns.

---

### ✅ **Web Development Example: Friend Connection Suggestions in Social Media**

**Scenario:**
In a social app, mutual friendships are symmetric: if Alice is friends with Bob, then Bob is friends with Alice. The platform may want to find how many times two users have been suggested as potential friends together.

**Similarity to the problem:**

* Pair `[UserA, UserB]` is equivalent to `[UserB, UserA]`.
* Counting occurrences of such unordered pairs helps identify mutual interactions and optimize friend suggestion algorithms.
* The backend logic can normalize and count these efficiently using a similar mapping approach.
