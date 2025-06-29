# What is `"type": "module"` in `package.json`?

## Purpose

The `"type": "module"` field in your `package.json` tells Node.js that your code uses **ECMAScript Modules (ESM)** syntax—meaning you can use `import` and `export` statements in your `.js` files.

```json
{
  "type": "module"
}
```

- With `"type": "module"`, Node.js treats `.js` files as ESM by default.
- If you set `"type": "commonjs"` (or omit the field), `.js` files are treated as CommonJS modules (using `require`/`module.exports`).

---

## What happens if you **don't** specify `"type": "module"`?

- By default, Node.js treats `.js` files as **CommonJS** modules.
- You must use `require` and `module.exports`.
- If you try to use `import`/`export` in a `.js` file, Node.js will throw an error unless you:
  - Rename your file to `.mjs`, or
  - Explicitly set `"type": "module"` in `package.json`.

---

## Example

### With `"type": "module"`
```json
{
  "type": "module"
}
```
```js
// foo.js
import bar from './bar.js';
export default function foo() {}
```

### Without `"type": "module"`
```js
// foo.js
const bar = require('./bar.js');
module.exports = function foo() {};
```

If you try to use `import`/`export` in a `.js` file **without** `"type": "module"`, you'll get a syntax error.

---

## Summary Table

| `"type"` field        | `.js` files are treated as | Syntax you can use      |
|---------------------- |---------------------------|------------------------ |
| `"module"`            | ECMAScript Modules (ESM)  | `import`/`export`       |
| `"commonjs"` or unset | CommonJS                  | `require`/`module.exports` |

---

## References
- [Node.js Docs: Modules: Packages](https://nodejs.org/api/packages.html#type)
- [Node.js Docs: ECMAScript Modules](https://nodejs.org/api/esm.html)

# When to Use `"type": "module"` in `package.json`

## Use `"type": "module"` When:

- **You want to use ECMAScript Module (ESM) syntax** in your Node.js project:
  - Use `import` and `export` statements instead of `require` and `module.exports`.
  - Example:
    ```js
    import express from 'express';
    export function myFunc() {}
    ```
- **You want your `.js` files to be treated as ESM by default** rather than CommonJS.

- **You need compatibility with modern JavaScript tooling or frameworks** that prefer or require ESM.

- **You want to use top-level `await`** (supported only in ESM).

- **You want to share code between Node.js and front-end JavaScript** without changing import/export syntax.

---

## When NOT to Use `"type": "module"`

- If your codebase uses CommonJS (`require`, `module.exports`) and you don’t want to refactor to ESM.
- If you need compatibility with older tools or dependencies that expect CommonJS modules.
- If you want `.js` files to be treated as CommonJS by default.

---

## Summary Table

| Situation                                         | Should you use `"type": "module"`? |
|---------------------------------------------------|:----------------------------------:|
| Want to use `import`/`export` syntax              | Yes                                |
| Refactoring a CommonJS project                    | No (unless you plan to migrate)    |
| Need top-level `await`                            | Yes                                |
| Using `.mjs` extensions for ESM                   | Optional (not required)            |
| Rely on legacy CommonJS-only modules              | No                                 |

---

**Tip:**  
Use `"type": "module"` if you want modern, standards-based JavaScript modules in Node.js, but be aware you may need to update import/export usage and some dependencies.

---

**References:**
- [Node.js Docs: ECMAScript Modules](https://nodejs.org/api/esm.html)
- [Node.js Docs: Packages and `"type"` field](https://nodejs.org/api/packages.html#type)
