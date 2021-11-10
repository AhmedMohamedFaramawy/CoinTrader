const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Card = require("../models/Card");

// Added the regex which allows for partial Search
// The $options: 'i'   , allows me to search using case insensitive Words.

router.get("", async (req, res) => {
  const username = req.query.username;
  const cardName = req.query.cardName;
  const category = req.query.category;

  console.log("username :", username);
  console.log("cardName :", cardName);
  console.log("category :", category);

  if (req.query.category === "All") {
    res.send(
      await Card.find({
        username: req.query.username,
        cardName: { $regex: req.query.cardName, $options: "i" },
      })
    );
  } else {
    res.send(
      await Card.find({
        username: req.query.username,
        cardName: { $regex: req.query.cardName, $options: "i" },
        category: req.query.category,
      })
    );
  }
});

module.exports = router;
