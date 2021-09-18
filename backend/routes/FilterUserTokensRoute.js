const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Card = require("../models/Card");


// Added the regex which allows for partial Search
// The $options: 'i'   , allows me to search using case insensitive Words.

router.get("", async (req,res) => {

    const username = req.query.username;
    const cardName = req.query.cardName;
    const category = req.query.category; 

    console.log("username :", username);
    console.log("cardName :", cardName);
    console.log("category :", category);

  if(req.query.category === "All"){  
       res.send( await Card.find({username: req.query.username, cardName: {$regex: req.query.cardName, $options: 'i' } }));
    } else {
       res.send( await Card.find({username: req.query.username, cardName: {$regex: req.query.cardName, $options: 'i' }, category: req.query.category}));
    }
});


/*
router.post("", async (req,res) => {

    const username = req.body.username;
    const cardName = req.body.cardName;
    const category = req.body.category; 

    console.log("username :", username);
    console.log("cardName :", cardName);
    console.log("category :", category);

    //res.send(await User.find({username: username }));
    //res.send(await User.find({"username": username, "createdCards.cardName": cardName, "createdCards.category": category}));
    //res.send(await User.find({username: username , createdCards:{ $elemMatch: { cardName: cardName, category: category } }}));
    //res.send(await User.find({"createdCards": {cardName: "sss" }}));
    res.send(await User.find({ username: "123@hotmail.com", createdCards: {cardName: "sss" , category: "Sports"} }));
    //res.send(await User.find({username: "123@hotmail.com" , createdCards.cardName: "sss", createdCards.category: "Sports" }));
});
*/

module.exports = router;