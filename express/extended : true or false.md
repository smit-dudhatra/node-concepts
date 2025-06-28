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
  - Uses Node's built-in querystring library
  - Only supports simple key-value pairs
  - Would parse the above example as { 'user[name]': 'John', 'user[age]': '25' }
  - More efficient but limited in capability

- **extended: true**
  - Uses the `qs` library for parsing.
  - Allows for rich objects and arrays to be encoded into the URL-encoded format (`a[0]=1&a[1]=2` or nested objects).
  - Supports nested objects and complex data structures
  - Allows form data like user[name]=John&user[age]=25 to be parsed as { user: { name: 'John', age: '25' } }
  - More flexible but slightly less performant
  - It provides more flexibility if your forms grow more complex later
  - It's the default in newer Express applications
  - The performance difference is negligible for most applications
  - Unless you're in a highly performance-sensitive environment with simple form needs, stick with extended: true.

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
