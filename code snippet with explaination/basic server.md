```const http = require('http');
const fs = require("fs");

const { log } = console;

const server  = http.createServer((req,res) => {

    const method = req.method;
    const url = req.url;

    log('method:', method);
    log('url:', url);

    if (url === "/" && method === "GET") {

        const content = `

            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Promise Function Call</title>
            </head>
            <body>
                <form method="POST" action="/submit">
                    <label for="input">Enter something:</label>
                    <input type="text" id="input" name="input">
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </body>
            </html>
        `;

        res.write(content);
        res.end();
        return;

    }

    if (url === '/submit' && method === 'POST'){
        let body = "";
        const chunks = [];

        req.on('data' , (chunk => {
            body += chunk.toString(); // Convert Buffer to string
            chunks.push(chunk)
        }));

        req.on("end" , () => {

            const parsedBody = Buffer.concat(chunks).toString();
            log("Received body:", parsedBody);

            const input = new URLSearchParams(body);
            const message = input.get('input');
            log("Received input:", message);

            fs.writeFile("output.txt" , message , (error) => {
                if (error){
                    log("Error while writing to file:" , error);
                }
                else{
                    res.statusCode = 302;
                    res.setHeader('Location', '/');
                    log("Data written to output.txt");
                    res.end();
                }
            })
            
            
            
        })
    }

});

server.listen(3000 , (error) => {
    if (error){
        log("Error starting server:", error);

    }
    else{
        log("Server is running on http://localhost:3000");
    }
});
```

here the Buffer is good option

why ?

Here you’re actually parsing the exact same bytes two ways:

body (a String)
– You append each chunk via body += chunk.toString() as it arrives.
– Simple, but can be less efficient (and can mis‐interpret non-UTF8 data).

parsedBody (also a String)
– You collect raw Buffer chunks in an array and then do

```Buffer.concat(chunks).toString()```

– This is more reliable for arbitrary binary data and—especially for large payloads—often faster, since it avoids repeated string reallocations.

Functionally they end up identical here (plain ASCII form data), but the Buffer-based approach is the “safer” pattern for arbitrary request bodies.
