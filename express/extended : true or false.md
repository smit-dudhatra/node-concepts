# Choosing `extended: false` or `extended: true` in Express.js

The `extended` option is used when you are using the `express.urlencoded` middleware in Express.js. It determines how the URL-encoded data is parsed.

## Syntax

```js
app.use(express.urlencoded({ extended: false }));
// or
app.use(express.urlencoded({ extended: true }));
```

## What do they mean?

- **extended: false**
  - Uses the Node.js built-in `querystring` library to parse URL-encoded data.
  - Only supports simple key-value pairs (`a=1&b=2`).

- **extended: true**
  - Uses the `qs` library for parsing.
  - Allows for rich objects and arrays to be encoded into the URL-encoded format (`a[0]=1&a[1]=2` or nested objects).

## Which should you use?

- Use **`extended: true`** if you want to support rich, nested objects and arrays in your form data.
- Use **`extended: false`** if you only need to support simple key-value pairs and want a slightly lighter dependency.

## Example

```js
// For simple forms (no nested objects/arrays)
app.use(express.urlencoded({ extended: false }));

// For complex/nested forms
app.use(express.urlencoded({ extended: true }));
```

## Recommendation

- For most modern applications, **`extended: true`** is recommended, as it handles more complex data structures.
- If you are sure your form data will always be flat/simple, `extended: false` is fine.

---

**Summary:**  
Use `extended: true` for maximum compatibility and flexibility.
