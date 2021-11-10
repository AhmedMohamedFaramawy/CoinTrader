const express = require("express");
const router = express.Router();
const Card = require("../models/Card");
const authenticateToken = require("./authenticateToken").authenticateToken;

require("dotenv").config();

router.get("", authenticateToken, async (req, res) => {
  console.log("viewww token header is:", req.headers.Authorization);
  res.send(await Card.find({}));
});

module.exports = router;
