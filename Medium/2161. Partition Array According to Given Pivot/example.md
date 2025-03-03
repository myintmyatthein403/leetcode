The concept of partitioning an array while maintaining relative order has several real-world applications. Here are two examples:

---

### **1. Task Prioritization in a To-Do List (Project Management)**
Imagine a **task management system** where tasks have different priorities:  
- **Low Priority** (Less than a threshold)  
- **Normal Priority** (Equal to a threshold)  
- **High Priority** (Greater than a threshold)  

📌 **Example:**  
A company has a task list, and we want to reorder it so that:  
- Low-priority tasks appear first  
- Normal-priority tasks (current sprint) remain in the middle  
- High-priority tasks are placed last  

#### **Example Input:**
```js
let tasks = [
    { id: 1, priority: 5 },
    { id: 2, priority: 8 },
    { id: 3, priority: 3 },
    { id: 4, priority: 8 },
    { id: 5, priority: 2 }
];

let pivotPriority = 5;
```

#### **Example Output:**
```js
[
    { id: 5, priority: 2 },  // Low priority
    { id: 3, priority: 3 },  // Low priority
    { id: 1, priority: 5 },  // Normal priority
    { id: 2, priority: 8 },  // High priority
    { id: 4, priority: 8 }   // High priority
]
```
✅ This ensures that urgent tasks are reviewed last while still keeping the order within priority groups.

---

### **2. Online Store - Product Sorting by Rating**
In an **e-commerce website**, customers may want to see products based on ratings:  
- **Low-rated products** (less than 4 stars)  
- **Average-rated products** (exactly 4 stars)  
- **High-rated products** (greater than 4 stars)  

📌 **Example:**  
A store wants to display products in this order while keeping their relative order intact.

#### **Example Input:**
```js
let products = [
    { name: "Laptop", rating: 5 },
    { name: "Phone", rating: 4 },
    { name: "Tablet", rating: 3 },
    { name: "Headphones", rating: 4 },
    { name: "Monitor", rating: 2 }
];

let pivotRating = 4;
```

#### **Example Output:**
```js
[
    { name: "Tablet", rating: 3 },    // Low-rated
    { name: "Monitor", rating: 2 },   // Low-rated
    { name: "Phone", rating: 4 },     // Average-rated
    { name: "Headphones", rating: 4 },// Average-rated
    { name: "Laptop", rating: 5 }     // High-rated
]
```
✅ This ensures users see the lower-rated items first (for potential discounts or clearance sales) while keeping higher-rated ones at the end.

---

### **Conclusion**
This approach is useful when you need to **group and reorder data efficiently while preserving relative order**.  
💡 **Other potential use cases:**  
- **Filtering job applicants** by experience or test scores  
- **Sorting customer complaints** based on urgency  
- **Organizing stock inventory** based on demand  

Would you like a more detailed implementation for one of these scenarios? 🚀
