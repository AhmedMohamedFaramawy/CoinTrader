const express = require("express");
const router = express.Router();
const isAuth = require("./authMiddleware").isAuth;
const authenticateToken =  require("./authenticateToken").authenticateToken;

router.get("", authenticateToken,(req, res, next) => {
    //console.log(req.user.name);
    console.log("google token iss:", req.query.tokens);
});



module.exports = router;