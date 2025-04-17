### 🔧 **Real-World Example 1: Network Packet Matching**

**Scenario:**  
In network monitoring systems, each packet has a source and destination. Suppose we log the timestamps of packets from the same device.

**Use Case:**  
We want to **count the number of packet pairs** sent from the same device where the **product of their timestamps is divisible by `k`**, which could relate to timing sync or resource usage thresholds.

**Similar to:**  
`nums[i] == nums[j]` → same device  
`(i * j) % k == 0` → timestamp product modulo some interval or resource unit.

---

### 🧬 **Real-World Example 2: Gene Pair Analysis in Bioinformatics**

**Scenario:**  
You have a list of genes with their positions in a DNA strand.

**Use Case:**  
Find all **gene pairs** of the same type where the **product of their positions is divisible by `k`** — used in pattern discovery or to locate potential mutation zones.

**Similar to:**  
`nums[i] == nums[j]` → same gene type  
`(i * j) % k == 0` → position relationship is divisible by a biological factor.

---

### 🌐 **Web Development Example: Product Analytics on E-commerce Platform**

**Scenario:**  
You’re analyzing **product view patterns** on a website. Each product has an ID, and you log the **index (time or event sequence)** when it was viewed.

**Use Case:**  
Count how many **pairs of identical product views** happened at moments where the **product of their view indices is divisible by `k`**, maybe to detect **bot-like behavior** or repeated patterns.

**Similar to:**  
`nums[i] == nums[j]` → same product viewed  
`(i * j) % k == 0` → suspicious or notable timing pattern in view history.
