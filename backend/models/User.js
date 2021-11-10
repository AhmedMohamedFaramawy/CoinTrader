const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const encrypt = require("mongoose-encryption");
const passportLocalMongoose = require("passport-local-mongoose");
//import { PassportLocalSchema } from 'mongoose';
const findOrCreate = require("mongoose-findorcreate");
require("dotenv").config();

//const Card = require("./Card");

const cardSchema = mongoose.Schema({
  username: String,
  cardName: String,
  actualName: String,
  category: String,
  tokensInCirculation: Number,
  marketCap: Number,
});

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  createdCards: [cardSchema],
  googleId: String,
  hash1: String,
  salt1: String,
  BoughtCards: [cardSchema],
});

userSchema.plugin(passportLocalMongoose, {
  secret: process.env.SECRET,
  encryptedFields: ["username", "password"],
});
userSchema.plugin(findOrCreate);

module.exports = mongoose.model("User", userSchema);
