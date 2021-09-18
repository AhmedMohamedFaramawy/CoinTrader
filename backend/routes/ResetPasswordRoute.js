const express = require("express");
const router = express.Router();
const User = require("../models/User");
const authenticateToken = require("./authenticateToken").authenticateToken;
//const jwt = require("jsonwebtoken");

router.post("", authenticateToken, async (req,res) => {  //Same problem as CreateToken in which i dont know what encryption passport.js uses on the password , thus i can encrypt them like them to find this certain user
    
    const username = req.body.username;
    const password = req.body.password;
    const newpassword = req.body.newpassword;

  try{  
      await User.updateOne({username: username}, {$set:{password: newpassword}}); 
      console.log("Password Reset Successfull");
    } catch(err){
        console.log(err);
    }
});

/*
router.post("" , authenticateToken, (req,res) => {  //Same problem as CreateToken in which i dont know what encryption passport.js uses on the password , thus i can encrypt them like them to find this certain user
    
    const username = req.body.username;
    const password = req.body.password;
    const newpassword = req.body.newpassword;

    console.log("username is :", username);
    console.log("newpassword is :" , newpassword);
try{
    User.updateOne({username: username}, {$set:{password: newpassword}}); 
    console.log("ay haga");
}catch(err){
    console.log(err);
}
});
*/


module.exports = router;