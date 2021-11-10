const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Card = require("../models/Card");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const authenticateToken = require("./authenticateToken").authenticateToken;
const jwt = require("jsonwebtoken");

require("dotenv").config();

router.put("", async (req, res) => {
  const username = req.body.users;
  const id = req.body.id;

  console.log(req.body);
  console.log("ID is :", id);

  const result = await Card.findOne({ _id: id });

  console.log("result is:", result);

  const tokensInCirculation = 0;
  const marketCap = 0;

  const boughtCard = new Card({
    cardName: result.cardName,
    actualName: result.actualName,
    category: result.category,
    tokensInCirculation,
    marketCap,
  });

  await User.findOne({ username: username })
    .then((record) => {
      console.log(record);
      // must be current session user
      record.BoughtCards.push(boughtCard);
      record.save();
    })
    .catch((err) => {
      console.log("error in buy", err);
      // res.send(500).statusMessage("Server Error");
    });
});

module.exports = router;
