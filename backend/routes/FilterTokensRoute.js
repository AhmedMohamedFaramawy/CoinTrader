const express = require("express");
const router = express.Router();
const Card = require("../models/Card");

// Added the regex which allows for partial Search
// The $options: 'i'   , allows me to search using case insensitive Words.

router.get("", async (req, res) => {
  if (req.query.category === "All") {
    res.send(
      await Card.find({ cardName: { $regex: req.query.search, $options: "i" } })
    );
  } else {
    res.send(
      await Card.find({
        cardName: { $regex: req.query.search, $options: "i" },
        category: { $regex: req.query.category },
      })
    );
  }
});

module.exports = router;
