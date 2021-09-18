const express = require("express");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const jwt = require("jsonwebtoken");

require('dotenv').config();

module.exports = (passport) =>  {
  passport.use(new GoogleStrategy({
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.CALL_BACK_URL,  // The URL you will be directed to after loging in with google 
    },
    
     async (accessToken, refreshToken, profile, cd) => {
        console.log("Trying to access GoogleAccount :" , profile);// problem may be here  
       
        try{
            const user = await User.findOne({googleId: profile.id});
            if(user){
                //jwt.sign(user.id,  process.env.ACCESS_TOKEN_SECRET, (err,token) => {
                 //if(err){
                  //throw err;
                 //} else {
                   const data = {
                     username: user.username,
                     password: user.password,
                   }
                   return cd(null, data)
                    //return cd(null, token); // return jwt token
                 //}
                //});
            } else {
                  const newUser = new User ({
                      username: profile._json.email, // problem here
                      password: '',
                      createdCards: [],
                      googleId: profile.id,
                   })
              user = await User.create(newUser);    
              return cd(null,user);
            }
        } catch(err) { 
            console.log("err is:", err);
        }
      }
  ));
  
  
  //  serialization and Deserialization
  passport.serializeUser((user, done) => { 
      console.log("serilized User");
      return done(null, user.id);
    });
    
  passport.deserializeUser((id, done) => { // In each request the cookie will be taken and deserialized
      const user = User.findById(id, (err, user) => {
        console.log("deserilzed");
        return done(err, user);
      });
    });
  };

/* // Working google strategy
module.exports = (passport) =>  {
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALL_BACK_URL,  // The URL you will be directed to after loging in with google 
    //passReqToCallback: true,                      //should it be  3000 or 5000????????????
    //userProfileURL: process.env.USER_PROFILE_URL,
  },
  
   async (accessToken, refreshToken, profile, cd) => {
      console.log("Trying to access GoogleAccount :" , profile);// problem may be here  
     
      try{
          const user = await User.findOne({googleId: profile.id});
          if(user){
              return cd(null,user);
          } else {
                const newUser = new User ({
                    username: profile._json.email, // problem here
                    password: '',
                    createdCards: [],
                    googleId: profile.id,
                 })
            user = await User.create(newUser);    
            return cd(null,user);
            //cd(null,profile);
          }
      } catch(err) { 
          console.log("err is:", err);
      }
    }
));


//  serialization and Deserialization
passport.serializeUser((user, done) => { 
    console.log("serilized User");
    return done(null, user.id);
  });
  
passport.deserializeUser((id, done) => { // In each request the cookie will be taken and deserialized
    const user = User.findById(id, (err, user) => {
      console.log("deserilzed");
      return done(err, user);
    });
  });
};
*/