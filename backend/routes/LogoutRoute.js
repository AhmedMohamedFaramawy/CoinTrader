const express = require("express");
const router = express.Router();
const authenticateToken = require("./authenticateToken").authenticateToken;

router.get("", authenticateToken, (req,res) => {
    //req.logout();
    req.session = null;
    req.user = null;
    res.send(req.user);
    
});

module.exports = router;