const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Card = require("../models/Card");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const authenticateToken = require("./authenticateToken").authenticateToken;
const jwt = require("jsonwebtoken");

require('dotenv').config();

// 200 OK
// 400 Bad request
// 401 Unuathorized
// 404 Not Found
router.post("", authenticateToken, async (req, res) => {
    
    console.log("req.user", req.user)

    const username  = req.body.username;
    const cardName = req.body.cardName;   
    const actualName = req.body.actualName;
    const category = req.body.category;
   
    console.log("The logged in user is :", username);
    if (!req.body.cardName && !req.body.actualName && !req.body.category){
        res.sendStatus(400).json("Bad  request!");
    }
    else{ 
    const tokensInCirculation = 0;
    const marketCap = 0;
    const newCard = new Card({
        username,
        cardName,
        actualName,
        category,
        tokensInCirculation,
        marketCap
    });

    newCard.save();
    res.send(newCard);
    
    await User.findOne({ username: username}).then((record) => { // must be current session user
      record.createdCards.push(newCard)
      record.save()})
        .catch((err) => {
            res.send(500).statusMessage("Server Error");
        });


    } 
});

module.exports = router;