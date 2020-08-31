const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
const app = express();

//Middleware

app.use(bodyParser.json());

//Routes
//Import Routes

const postRoutes = require("./routes/posts");

app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Hello World.");
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
