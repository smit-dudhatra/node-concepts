```const chunks = [];

        req.on('data' , (chunk => {
            
            chunks.push(chunk);
        }));

        req.on("end" , () => {
            const parsedBody1 = Buffer.concat(chunks).toString();
            const parsedBody2 = chunks.toString();

// here line 9 and 10 yields the same results as the data is carrying only 1 fields
// if you will parse more data
// you will see the difference and "Buffer" approach will be fine in long term

            const body = parsedBody1.split("=")[1]; // Assuming the first part is the input
            const anotherBody = parsedBody2.split("=")[1]; // Assuming the first part is the input
            log("Received body:", body);
            log("Received another body:", anotherBody);



            log("Type of parsedBody1:", typeof parsedBody1);
            log("Type of parsedBody2:", typeof parsedBody2);
            log("Length of parsedBody1:", parsedBody1.length);
            log("Length of parsedBody2:", parsedBody2.length);

            // const input = new URLSearchParams(body);
            // const message = input.get('input');
            // log("Received input:", message);

            fs.writeFile("output.txt" , body , (error) => {
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
```
