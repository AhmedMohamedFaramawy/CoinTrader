const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
  res.render("/"); // I NEED TO RENDER SOMETHING HERE
});

module.exports = router;
