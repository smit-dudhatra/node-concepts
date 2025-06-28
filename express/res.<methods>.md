res.statusCode = 301;

res.setHeader("Content-Type" , "text/html");

res.end("text content or empty");

res.send("string");

res.redirect("url")
