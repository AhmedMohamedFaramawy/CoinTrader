const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
  res.render("/"); // I NEED TO RENDER SOMETHING HERE
  console.log("mama 7elwa");
});

module.exports = router;
