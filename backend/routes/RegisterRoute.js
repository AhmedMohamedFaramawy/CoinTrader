const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("passport");
const genPassword = require("../lib/passwordUtils").genPassword;
//const express = require("express");

require("../config/MongoDB"); // may remove this if its not important

router.post("", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const newUser = new User({
    username: username,
    password: password,
  });

  await User.findOne({ username: username })
    .then((result) => {
      if (result === null) {
        newUser.save();
        console.log("New User Created");
      } else {
        console.log("username already exists");
      }
    })
    .catch((err) => {
      console.log("not found", err);

      console.log("New User created");
    });
});

// Working Register

/*
router.post("", (req, res, next) => {

   // if(res.ok) {
    const  saltHash =  genPassword(req.body.password);

    const salt = saltHash.salt;
    const hash = saltHash.hash;

    const newUser = new User({
        username: req.body.username,
        hash1: hash,
        salt1: salt,
    })

    newUser.save()
        .then((user) => {
            console.log(user);
        });
   res.redirect("/Login"); // redirects doesnt work
   //console.log(req.session);
});
*/

module.exports = router;
