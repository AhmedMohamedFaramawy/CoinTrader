const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("../models/User");
const cors = require("cors");
const Card = require("../models/Card");
const ejs = require("ejs");



const MongoStore = require("connect-mongo");

require('dotenv').config();


const app = express();

const dbURI = process.env.DB_URI; //put mongodb in its own file
const connection = mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true , useNewUrlParser: true})
    .then(async () => {
        console.log("DB Connected");
    })
    .catch((err) => console.log(err));

mongoose.set("useCreateIndex" , true);


