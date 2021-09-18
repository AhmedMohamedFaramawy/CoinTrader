const express = require("express");
const User = require("../models/User");
const router = express.Router();
const authenticateToken =  require("./authenticateToken").authenticateToken;

router.post("", authenticateToken, async (req, res, next) => {
    const username = req.body.username;
    console.log("Username is:", username);
    res.send(await User.find({username: username}));
});



module.exports = router;