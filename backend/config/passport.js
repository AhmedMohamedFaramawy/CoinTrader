const express = require("express");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const jwt = require("jsonwebtoken");

require("dotenv").config();

module.exports = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: process.env.CALL_BACK_URL, // The URL you will be directed to after loging in with google
      },

      async (accessToken, refreshToken, profile, cd) => {
        console.log("Trying to access GoogleAccount :", profile);

        try {
          const user = await User.findOne({ googleId: profile.id });
          if (user) {
            const data = {
              username: user.username,
              password: user.password,
            };
            return cd(null, data);
          } else {
            const newUser = new User({
              username: profile._json.email,
              password: "",
              createdCards: [],
              googleId: profile.id,
            });
            user = await User.create(newUser);
            return cd(null, user);
          }
        } catch (err) {
          console.log("err is:", err);
        }
      }
    )
  );

  //  serialization and Deserialization
  passport.serializeUser((user, done) => {
    console.log("serilized User");
    return done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    const user = User.findById(id, (err, user) => {
      console.log("deserilzed");
      return done(err, user);
    });
  });
};
