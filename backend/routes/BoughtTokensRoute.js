const express = require("express");
const router = express.Router();
const User = require("../models/User");
const authenticateToken =  require("./authenticateToken").authenticateToken;

router.post("", authenticateToken, async (req,res)  => {

    res.send(await User.find({username: req.body.username}));
});

module.exports = router;