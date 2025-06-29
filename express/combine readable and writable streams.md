# How to Combine Read and Write Streams in Node.js

Combining readable and writable streams in Node.js is commonly done using the `.pipe()` method. This method allows you to take data from a readable stream and send it directly to a writable stream—useful for operations like copying files, compressing, or transforming data.

---

## 1. Basic Example: File Copy

```js
const fs = require('fs');

const readable = fs.createReadStream('input.txt');
const writable = fs.createWriteStream('output.txt');

readable.pipe(writable);
```
- This reads from `input.txt` and writes to `output.txt` efficiently using streams.

---

## 2. With Transform Streams (e.g., Compression)

You can also chain streams with transforms, such as gzip compression:

```js
const fs = require('fs');
const zlib = require('zlib');

const readable = fs.createReadStream('input.txt');
const gzip = zlib.createGzip();
const writable = fs.createWriteStream('output.txt.gz');

// Combine: Read -> Gzip -> Write
readable.pipe(gzip).pipe(writable);
```

---

## 3. Handling Stream Events (Optional)

You can listen to events for error handling or completion:

```js
readable.pipe(writable)
  .on('finish', () => {
    console.log('File has been copied!');
  })
  .on('error', (err) => {
    console.error('Error:', err);
  });
```

---

## 4. Custom Transform Stream Example

You can create your own transform stream to modify data as it passes through:

```js
const { Transform } = require('stream');

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    // Convert chunk to upper case
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

fs.createReadStream('input.txt')
  .pipe(upperCaseTransform)
  .pipe(fs.createWriteStream('output-uppercase.txt'));
```

---

## Summary

- Use `.pipe()` to connect readable streams to writable streams.
- You can chain multiple streams (including transform streams).
- This approach is memory-efficient and ideal for large files or real-time data processing.

---

**References:**
- [Node.js Stream Documentation](https://nodejs.org/api/stream.html)
- [Node.js File System Streams](https://nodejs.org/api/fs.html#fscreatewritestreampath-options)
