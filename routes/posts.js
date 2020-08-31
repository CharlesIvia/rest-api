const express = require("express");
const router = express.Router();

//Routes

router.get("/", (req, res) => {
  res.send("Hello World Posts.");
});

router.get("/specific", (req, res) => {
  res.send("Hello World Specific Posts.");
});

module.exports = router;
