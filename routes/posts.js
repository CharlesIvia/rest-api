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
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
