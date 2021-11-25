const express = require("express");
const router = express.Router();
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const jwt = require("jsonwebtoken");

require("../config/passport")(passport); //GOOGLE STRATEGY

router.get(
  "/google", // Link that takes you to the Google SignIn
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })
);

router.get(
  "/google/Main", // This method will serialize the User & store it into a Cookie
  passport.authenticate("google", {
    failureRedirect: "/Login",
    session: false,
  }),
  (req, res) => {
    console.log("Token IS :", res.req.user);
    const tokens = res.req.user;

    // I redirect to the following Link which is Wrong

    res.redirect(
      `http://localhost:5000/Login?username=${res.req.user.username}&password=${res.req.user.password}`
    );
    // res.redirect(
    //   "http://localhost:5000/Login?username=" +
    //     res.req.user.username +
    //     "&password=" +
    //     res.req.user.password
    // );

    //res.redirect("http://localhost:5000/Main?tokens=" + tokens );
  }
);

module.exports = router;
