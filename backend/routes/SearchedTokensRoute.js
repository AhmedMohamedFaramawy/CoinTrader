const express = require("express");
const router = express.Router();
const Card = require("./models/Card");

router.get("", async (req,res) => {
     res.send(await Card.find({}));
})



module.exports = router;