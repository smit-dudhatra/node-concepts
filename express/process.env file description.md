# `process.env` vs `dotenv.parsed` in Node.js

## 1. `process.env`

- **What it is:**  
  A global object in Node.js that contains the environment variables for the current process.
- **How it's used:**  
  You access environment variables throughout your code using `process.env.VARIABLE_NAME`.
- **Source:**  
  By default, contains the system’s environment variables. When using the `dotenv` package, it also includes variables loaded from your `.env` file.

**Example:**
```js
console.log(process.env.DB_HOST); // 'localhost' if DB_HOST is set in environment or .env file
```

---

## 2. `dotenv.parsed`

- **What it is:**  
  `dotenv.parsed` is **not a global object**. It is a property of the object returned by `dotenv.config()`.  
  It contains an object with key-value pairs parsed directly from your `.env` file as strings.
- **How it's used:**  
  You can use it to review or manipulate the values loaded from `.env` before they are set on `process.env`.
- **Source:**  
  Only includes variables from your `.env` file (not system environment variables).

**Example:**
```js
const dotenv = require('dotenv');
const result = dotenv.config();
console.log(result.parsed); 
// { DB_HOST: 'localhost', DB_USER: 'admin' }
```

---

## Key Differences

| Aspect            | `process.env`                           | `dotenv.parsed`                |
|-------------------|-----------------------------------------|---------------------------------|
| Availability      | Global in Node.js                       | Only from `dotenv.config()`     |
| Source            | System env + `.env` file (if loaded)    | Only from `.env` file           |
| Type              | `{ [key: string]: string | undefined }` | `{ [key: string]: string }`     |
| Usage             | App-wide access                         | Direct access to parsed values  |
| Mutability        | Can be modified at runtime              | Read-only object                |

---

## Typical Usage

- **Use `process.env`** to access environment variables in your application code.
- **Use `result.parsed`** if you need to inspect or work with only the variables loaded from the `.env` file—often for programmatic checks, debugging, or custom merging logic.

---

## Example: Typical Usage with dotenv

```js
const dotenv = require('dotenv');
const result = dotenv.config();

if (result.error) {
  throw result.error;
}

console.log(process.env.DB_HOST);   // 'localhost'
console.log(result.parsed.DB_HOST); // 'localhost'
```

---

**References:**
- [Node.js process.env docs](https://nodejs.org/api/process.html#processenv)
- [dotenv package documentation](https://www.npmjs.com/package/dotenv)
