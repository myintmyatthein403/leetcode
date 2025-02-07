### Real World Example of Usage

1. **Inventory Management in a Warehouse**:
   - **Scenario**: A warehouse manager needs to keep track of the distinct types of products stored in the warehouse. Each product type is identified by a unique color code.
   - **Application**: By using the described approach, the manager can efficiently update the inventory when products are added or removed, and quickly determine the number of distinct product types in the warehouse at any given time.
   - **Implementation**:
     - Use a `Map` to track the color code of each product.
     - Use another `Map` to count the number of products of each color.
     - Use a `Set` to keep track of distinct product types.
     - For each update (addition or removal of products), update the maps and set accordingly, and get the count of distinct product types.

2. **Student Enrollment in Courses**:
   - **Scenario**: A university needs to manage student enrollments in various courses. Each course is identified by a unique color code.
   - **Application**: By using the described approach, the university can efficiently update the enrollments when students enroll in or drop courses, and quickly determine the number of distinct courses with enrolled students.
   - **Implementation**:
     - Use a `Map` to track the color code (course) each student is enrolled in.
     - Use another `Map` to count the number of students in each course.
     - Use a `Set` to keep track of distinct courses with enrolled students.
     - For each update (enrollment or drop), update the maps and set accordingly, and get the count of distinct courses.

These examples demonstrate how the approach can be applied to real-world scenarios where efficient tracking and updating of distinct items are crucial.
