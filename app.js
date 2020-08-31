const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const app = express();

//Routes
app.get("/", (req, res) => {
  res.send("Hello World.");
});

app.get("/posts", (req, res) => {
  res.send("Hello World Posts.");
});

//Connect to db

const dbURL = process.env.DB_URL;
mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log("DB Connected"))
  .catch((err) => console.log(err));

//Listen

app.listen(3000);
