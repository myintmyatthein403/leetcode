Here are **2 real-world examples** (outside web dev) and **1 web development example** where counting fair pairs like this can be useful:

---

### ✅ **Real-World Example 1: Financial Risk Analysis**
**Context:** A financial analyst is reviewing a portfolio of assets.

**Scenario:** Given an array of expected returns for different assets, they want to find all **pairs of assets** whose combined returns fall within a “safe investment” range.

- `nums = [expected returns of assets]`
- `lower = minimum acceptable combined return`
- `upper = maximum acceptable combined return`

**Why it's useful:** Helps portfolio managers to quickly assess viable asset pairings within specific performance thresholds for diversification.

---

### ✅ **Real-World Example 2: Sensor Data Filtering (IoT / Embedded Systems)**
**Context:** In an IoT device, multiple sensors are reading values periodically.

**Scenario:** You want to detect sensor pairs that together produce readings within a safe operating range for a machine.

- `nums = sensor readings`
- `lower = minimum combined reading for safety`
- `upper = maximum combined reading for safety`

**Why it's useful:** Prevents unsafe states by automatically flagging or shutting down systems if too few valid sensor combinations exist.

---

### 🌐 **Web Development Example: E-Commerce Promotions**
**Context:** An e-commerce platform wants to offer combo discounts.

**Scenario:** For a given product list, find all **product pairs** where the **sum of their prices** is within a promotional range (e.g., between $30 and $50).

- `nums = product prices`
- `lower = 30`
- `upper = 50`

**Why it's useful:** Automatically suggest or display discounted bundles (e.g., “Buy these two together and save!”). Also helps backend logic optimize which combos to promote.
