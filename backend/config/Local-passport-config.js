const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const User = require("../models/User");
const validPassword = require("../lib/passwordUtils").validPassword;

//const bcrypt = require("bcrypt");

//require("./MongoDB");  // may remove this if its not important

module.exports = function (passport) {
  const customFields = {
    usernameField: "username",
    passwordField: "password",
  };

  const verifyCallBack = async (username, password, done) => {
    console.log("verify");
    console.log(username);
    await User.findOne({ username: username })
      .then((user) => {
        console.log(user);

        if (!user) {
          return done(null, false, { message: "Incorrect username." });
        } else {
          const isValid = validPassword(
            password,
            user.toJSON().hash1,
            user.toJSON().salt1
          );

          if (!isValid) {
            return done(null, false, { message: "Incorrect password." });
          } else {
            return done(null, user);
          }
        }
      })
      .catch((err) => {
        console.log(err);
        done(err);
      });
  };

  const strategy = new LocalStrategy(customFields, verifyCallBack);

  passport.use(strategy);

  //  serialization and Deserialization
  passport.serializeUser((user, done) => {
    console.log("serilized User done");
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    const user = User.findById(id, (err, user) => {
      console.log("deserilzed");
      done(err, user);
    });
  });
};
