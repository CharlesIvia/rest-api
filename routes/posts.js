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

//Submit a posts

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

//Get specific post

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Post.findById(id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
