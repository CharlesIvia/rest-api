const express = require("express");

const app = express();

//Routes
app.get("/", (req, res) => {
  res.send("Hello World.");
});

//Listen

app.listen(3000);
