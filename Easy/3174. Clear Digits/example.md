### Example 1: Sanitizing Usernames
In a web application, you might want to ensure that usernames do not contain any digits. You can use the `clearDigits` function to sanitize usernames before storing them in your database.

**Input:**
```javascript
const username = "user123name";
const sanitizedUsername = clearDigits(username);
console.log(sanitizedUsername); // Output: "username"
```

### Example 2: Cleaning Product Codes
In an inventory management system, product codes might accidentally include digits that need to be removed for standardization. The `clearDigits` function can help clean these product codes.

**Input:**
```javascript
const productCode = "AB12CD34";
const cleanedProductCode = clearDigits(productCode);
console.log(cleanedProductCode); // Output: "ABCD"
