app.use accepts
array of request handler functions

in the middleware
either call next or send response and if response sending is confirmed in the middleware in advance
then don't use next as third argument


level 1:-
---------------------------------------------
```
const http = require('http');
const express = require('express');

const app = express();

const server = http.createServer(app);

serer.listen(3000 , (error) => {
  if (error){
  
  }

  console.log("Listening on port 3000")
)
```
----------------------------------------------

level 2:-
```
const express = require("express");

const app = express();

app.listen(3000);
```
just remove the `http` reference

---------------------------------------------
