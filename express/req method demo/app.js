```
const express = require("express");

const bodyParser = require("body-parser");

const router = require("./deal.route.js");

const app = express();
const port = 3000;

// Parse incoming JSON
// app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("home page data logging starts");
  console.log();
  console.log("will always runs");

  console.log("home Url:", req.url); // /api/deal
  console.log("home Original Url:", req.originalUrl); // /api/deal
  console.log("home base url:", req.baseUrl); // ""
  console.log("home hostname:", req.hostname); // localhost
  console.log("home protocol:", req.protocol); // http
  console.log("home path:", req.path); // /api/deal
  console.log(
    "home fullUrl:",
    `${req.protocol}://${req.get("host")}${req.originalUrl}`
  ); // http://localhost:3000/api/deal
  console.log("home host:", req.host); // localhost:3000
  console.log("---------------------------------");
  console.log("home page data logging ends here");
  console.log();
  next();
});

app.use("/api", router);

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Express JSON Form Example</title>
    </head>
    <body>
      <h1>Submit JSON Data</h1>
      <form action="/data" method="POST">
        <label>Name: <input type="text" name="name" required></label><br>
          <br/>
        <button type="submit">Submit</button>
      </form>
    </body>
    </html>
  `);
});

app.post("/data", (req, res) => {
  console.log("Received data:", req.body);
  res.json({
    message: "Data received!",
    received: req.body,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```
