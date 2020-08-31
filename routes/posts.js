const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//Routes

router.get("/", (req, res) => {
  res.send("Hello World Posts.");
});

router.get("/specific", (req, res) => {
  res.send("Hello World Specific Posts.");
});

router.post("/", (req, res) => {
  console.log(req.body);
});
module.exports = router;
