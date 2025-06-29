# Sending Data in Postman and Processing in Express.js

Below are examples showing how to send data in different formats using Postman, and how to process them in Express.js.

---

## 1. **form-data**

**In Postman:**
- Select the method as POST.
- Go to the "Body" tab.
- Select "form-data".
- Add two key-value pairs:
    - Key: `username`, Value: `name123`
    - Key: `email`, Value: `email@gmail.com`

**Express.js Code:**
```js
const express = require('express');
const multer = require('multer'); // For parsing multipart/form-data
const upload = multer();
const app = express();

app.post('/submit', upload.none(), (req, res) => {
  const { username, email } = req.body;
  res.json({ username, email });
});
```
> Note: For `form-data`, use the `multer` middleware (or `express.urlencoded({ extended: true })` for simple cases, but multer is safest for multipart forms).

---

## 2. **x-www-form-urlencoded**

**In Postman:**
- Select the method as POST.
- Go to the "Body" tab.
- Select "x-www-form-urlencoded".
- Add:
    - Key: `username`, Value: `name123`
    - Key: `email`, Value: `email@gmail.com`

**Express.js Code:**
```js
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  const { username, email } = req.body;
  res.json({ username, email });
});
```

---

## 3. **raw (JSON)**

**In Postman:**
- Select the method as POST.
- Go to the "Body" tab.
- Select "raw".
- Choose "JSON" from the dropdown (on the right).
- Enter:
```json
{
  "username": "name123",
  "email": "email@gmail.com"
}
```

**Express.js Code:**
```js
const express = require('express');
const app = express();

app.use(express.json());

app.post('/submit', (req, res) => {
  const { username, email } = req.body;
  res.json({ username, email });
});
```

---

## **Summary Table**

| Postman Body Type        | Express Middleware Required           | How to Access Data         |
|-------------------------|---------------------------------------|----------------------------|
| form-data               | `multer().none()` or `express.urlencoded` | `req.body.username`        |
| x-www-form-urlencoded   | `express.urlencoded({ extended: true })` | `req.body.username`        |
| raw (JSON)              | `express.json()`                          | `req.body.username`        |

---

**Tip:**  
- Always use the right middleware in Express to parse incoming request bodies, depending on the content type.
- For APIs, `raw (JSON)` is most common.
