# Popular Readable and Writable Streams in Node.js

Node.js streams are a core concept for handling data that is read from or written to a source in chunks, rather than all at once. They are especially useful for large files, network communications, and process management.

Below are some of the most popular **readable** and **writable** streams commonly used in Node.js projects:

---

## Popular **Readable Streams**

| Stream                 | Description                                      | Example Usage               |
|------------------------|--------------------------------------------------|-----------------------------|
| `fs.createReadStream`  | Reads data from files as a stream                | Reading large files         |
| `http.IncomingMessage` | Represents the incoming request in HTTP servers  | Reading HTTP request data   |
| `process.stdin`        | Standard input (console input)                   | Reading user input          |
| `net.Socket`           | Reads data from TCP sockets                      | Implementing TCP servers    |
| `child_process.stdout` | Output of a child process                        | Reading child process output|
| `zlib.createGunzip`    | Decompresses a stream                            | Reading compressed files    |

---

## Popular **Writable Streams**

| Stream                  | Description                                     | Example Usage               |
|-------------------------|-------------------------------------------------|-----------------------------|
| `fs.createWriteStream`  | Writes data to files as a stream                | Writing large files         |
| `http.ServerResponse`   | Represents the outgoing response in HTTP servers| Writing HTTP response data  |
| `process.stdout`        | Standard output (console output)                | Writing to console/logs     |
| `net.Socket`            | Writes data to TCP sockets                      | TCP client/server           |
| `child_process.stdin`   | Input to a child process                        | Sending data to subprocess  |
| `zlib.createGzip`       | Compresses a stream                             | Writing compressed files    |

---

## Examples

### File Streams
```js
// Readable stream
const fs = require('fs');
const readable = fs.createReadStream('input.txt');

// Writable stream
const writable = fs.createWriteStream('output.txt');
```

### HTTP Streams
```js
const http = require('http');

http.createServer((req, res) => {
  // req is a readable stream (IncomingMessage)
  // res is a writable stream (ServerResponse)
});
```

### Process Streams
```js
// Readable: process.stdin
// Writable: process.stdout
process.stdin.pipe(process.stdout);
```

---

## Summary Table

| Stream Type   | Popular Stream                    | Typical Use Case            |
|---------------|-----------------------------------|----------------------------|
| Readable      | `fs.createReadStream`             | File reading               |
|               | `http.IncomingMessage`            | HTTP request               |
|               | `process.stdin`                   | Terminal input             |
| Writable      | `fs.createWriteStream`            | File writing               |
|               | `http.ServerResponse`             | HTTP response              |
|               | `process.stdout`                  | Terminal output            |

---

**References:**
- [Node.js Streams Documentation](https://nodejs.org/api/stream.html)
- [Node.js File System Documentation](https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options)
- [Node.js HTTP Documentation](https://nodejs.org/api/http.html)
