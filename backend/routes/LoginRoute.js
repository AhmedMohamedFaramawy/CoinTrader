const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("passport");
const {createStrategy}  =  require("passport-local-mongoose");  //check this line
const localStrategy  = require("passport-local").Strategy;

const jwt = require("jsonwebtoken");


require('dotenv').config();

router.get("", async (req,res) => {

  console.log("password is:", req.query.password);
    const username = req.query.username;
    const password = req.query.password;

    const newUser = {
        username: username,
        password: password,
    }   

    console.log("username :", username);
    console.log("password :", password);

    await User.findOne({username: username , password: password})
    .then((result) => {
            console.log("User Found", result);
            if(result !== null){
                const accessToken = jwt.sign(newUser, process.env.ACCESS_TOKEN_SECRET)
                console.log("accessTokenss : " , accessToken);

                res.json({ 
                    username: username,
                    password: password,
                    accessToken: accessToken});
            }  else {
                res.status(400).json("username not found");
            }
        }).catch((err) => {
            console.log("user not found", err);
            res.send(err);
        })  
});

/*
//NOTE: I used post instead of get as we are creating a new JWT Token
router.get("", async (req,res) => {

    const username = req.query.username;
    const password = req.query.password;

    const newUser = {
        username: username,
        password: password,
    }   

    console.log(username);

    await User.findOne({username: username , password: password})
    .then((result) => {
            console.log("User Found", result);
            if(result !== null){
                const accessToken = jwt.sign(newUser, process.env.ACCESS_TOKEN_SECRET)
                console.log("accessToken : " , accessToken);

                res.json({ 
                    username: username,
                    password: password,
                    accessToken: accessToken});
            }  else {
                res.status(400).json("username not found");
            }
        }).catch((err) => {
            console.log("user not found", err);
            res.send(err);
        })  
});
*/

module.exports = router;