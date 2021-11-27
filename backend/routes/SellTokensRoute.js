const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Card = require("../models/Card");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const authenticateToken = require("./authenticateToken").authenticateToken;
const jwt = require("jsonwebtoken");

require("dotenv").config();

router.put("", authenticateToken, async (req, res) => {
  const username = req.body.users;
  const id = req.body.id;

  console.log(req.body);
  console.log("ID is :", id);

  const result = await Card.findOne({ _id: id });

  const Userresult = await User.findOne({ "BoughtCards._id": id });

  console.log("Useresult is:", Userresult);
  console.log("value needed is:", Userresult.BoughtCards.length);

  var foundCard = "";
  var foundCardIndex = "";

  for (var i = 0; i < Userresult.BoughtCards.length; i++) {
    if (Userresult.BoughtCards[i]._id == id) {
      foundCard = Userresult.BoughtCards[i].actualName;
      foundCardIndex = i;
    }
  }
  console.log("username is:", username);
  console.log("found card  actualName is:", foundCard);
  console.log("found card  index is:", foundCardIndex);

  const tokensInCirculation = 0;
  const marketCap = 0;

  const soldCard = new Card({
    _id: id,
    cardName: Userresult.BoughtCards[foundCardIndex].cardName,
    actualName: Userresult.BoughtCards[foundCardIndex].actualName,
    category: Userresult.BoughtCards[foundCardIndex].category,
    tokensInCirculation,
    marketCap,
    price: Userresult.BoughtCards[foundCardIndex].price,
  });

  await User.findOne({ username: username })
    .then(async (record) => {
      console.log(record);
      //must be current session user

      console.log("record.balacne is:", record.balance);
      console.log(
        "result.price is:",
        Userresult.BoughtCards[foundCardIndex].price
      );
      const newBalance =
        record.balance + Userresult.BoughtCards[foundCardIndex].price;
      console.log("newBalance is:", newBalance);
      await User.updateOne(
        { username: username },
        { $set: { balance: newBalance } }
      );
      await User.updateOne(
        { username: username },
        { $pull: { BoughtCards: soldCard } }
      );
      //record.BoughtCards.pull(boughtCard);
      //record.save();
    })
    .catch((err) => {
      console.log("error in Selling", err);
      // res.send(500).statusMessage("Server Error");
    });
});

module.exports = router;
