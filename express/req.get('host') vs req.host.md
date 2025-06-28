# Difference between `req.get('host')` and `req.host` in Express.js

In Express.js, both `req.get('host')` and `req.host` are used to obtain host information from the incoming HTTP request, but there are important differences in how they work and what they return.

---

## 1. `req.get('host')`

- **What it does:**  
  Returns the value of the `Host` HTTP header as sent by the client.
- **Usage:**  
  ```js
  const hostHeader = req.get('host');
  ```
- **Details:**  
  - It returns the exact string value from the `Host` header.
  - This may include the hostname *and* the port (e.g., `example.com:3000`).
  - It does not perform any parsing or normalization.
  - Equivalent to `req.headers['host']`.

---

## 2. `req.host`

- **What it does:**  
  Returns the hostname derived from the `Host` HTTP header, with port number stripped.
- **Usage:**  
  ```js
  const host = req.host;
  ```
- **Details:**  
  - Express parses the `Host` header and returns only the hostname, **excluding** the port.
  - If the `Host` header is `example.com:3000`, `req.host` will return `example.com`.
  - If the `X-Forwarded-Host` header is present (and Express is behind a proxy with `trust proxy` enabled), `req.host` may use its value instead.

---

## Summary Table

| Expression         | Returns value from         | Includes port? | Example Return Value    |
|--------------------|---------------------------|:--------------:|------------------------|
| `req.get('host')`  | `Host` header             | Yes            | `example.com:3000`     |
| `req.host`         | Parsed from `Host` header | No             | `example.com`          |

---

## Which should you use?

- Use **`req.get('host')`** if you need to access the full `Host` header (including port).
- Use **`req.host`** if you only need the hostname without the port.

---

**References:**
- [Express API - req.get()](https://expressjs.com/en/5x/api.html#req.get)
- [Express API - req.host](https://expressjs.com/en/5x/api.html#req.host)
