```
const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  console.log("Request received at:", new Date().toISOString());
  next();
});

router.get("/deal", (req, res) => {
  console.log("sub route data logging");
  console.log();
  console.log("sub route url", req.url); // /deal
  console.log("sub route originalUrl", req.originalUrl); // /api/deal
  console.log("sub route baseurl", req.baseUrl); // /api
  console.log("sub route hostname:", req.hostname); // localhost
  console.log("sub route protocol:", req.protocol); // http
  console.log("sub route path:", req.path); // /deal
  console.log(
    "sub route fullUrl:",
    `${req.protocol}://${req.get("host")}${req.originalUrl}`
  ); // http://localhost:3000/api/deal
  console.log("sub route host:", req.host); // localhost:3000
  console.log("---------------------------------");
  console.log("sub route data prining ends here");
  console.log();
  res.send("deal route");
});

module.exports = router;
```
