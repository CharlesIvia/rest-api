const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//Routes

//Get all the posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.send(posts);
  } catch (err) {
    console.log(err);
  }
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
