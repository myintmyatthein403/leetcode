Here are two **real-world examples** where this logic could be useful:

### **1. Data Deduplication in Financial Transactions**  
Imagine a **banking system** that processes daily transactions. If a customer mistakenly makes two consecutive **identical** transactions, the system should **merge them into one larger transaction** while keeping track of the changes.

- Example: A customer transfers **$100 twice** in a row → The system merges them into **$200** and marks the second transaction as invalid (`0`).
- Then, all invalid transactions (`0`s) are **moved to the end** for easier cleanup.

**Example Input:**  
`[100, 100, 50, 50, 0]` → **Merged and shifted** → `[200, 100, 0, 0, 0]`  

---

### **2. Memory Optimization in a Game Inventory System**  
In many **video games**, when players collect identical items **consecutively**, the game automatically **stacks** them together to save space in the inventory.

- Example: A player picks up **two identical potions** in a row → The game **combines them into one with double effect**.
- Empty slots (`0`s) are **moved to the end** to keep the inventory organized.

**Example Input:**  
`["Potion", "Potion", "Shield", "0", "0"]` → **Merged and shifted** → `["Super Potion", "Shield", "0", "0", "0"]`

These examples demonstrate how the logic of **merging consecutive elements** and **shifting empty spaces** can be applied in **banking, gaming, and other real-world applications**. 🚀
