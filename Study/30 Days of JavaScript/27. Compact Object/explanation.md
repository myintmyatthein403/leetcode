### Example 1: Cleaning Up User Input Data
Suppose you have a form where users can input their information, and you want to clean up the data by removing any empty fields before saving it to the database.

```javascript
const userInput = {
  name: "John Doe",
  email: "",
  phone: null,
  address: {
    street: "123 Main St",
    city: "",
    zip: "12345"
  },
  preferences: [null, "email", "", "sms"]
};

const cleanedInput = compactObject(userInput);
console.log(cleanedInput);
// Output: { name: "John Doe", address: { street: "123 Main St", zip: "12345" }, preferences: ["email", "sms"] }
```

### Example 2: Filtering API Response Data
Imagine you receive a response from an API that includes a lot of unnecessary or empty data, and you want to clean it up before processing it further.

```javascript
const apiResponse = {
  status: "success",
  data: {
    user: {
      id: 123,
      name: "Jane Doe",
      email: null,
      profile: {
        age: 0,
        bio: "",
        social: {
          twitter: null,
          facebook: "jane.doe"
        }
      }
    },
    metadata: {
      timestamp: "2023-10-01T12:34:56Z",
      requestId: ""
    }
  }
};

const cleanedResponse = compactObject(apiResponse);
console.log(cleanedResponse);
// Output: { status: "success", data: { user: { id: 123, name: "Jane Doe", profile: { social: { facebook: "jane.doe" } } }, metadata: { timestamp: "2023-10-01T12:34:56Z" } } }
```

These examples demonstrate how the `compactObject` function can be used to clean up and simplify data structures in real-world scenarios.


