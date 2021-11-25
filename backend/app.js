const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/User");
const cors = require("cors");
const Card = require("./models/Card");
const ejs = require("ejs");
const cookieSession = require("cookie-session");
const session = require("express-session");
const passport = require("passport");
const MongoStore = require("connect-mongo");
const localStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const cookieParser = require("cookie-parser");
//const isAuth = require("./routes/authMiddleware").isAuth;

require("dotenv").config();

const app = express();

const dbURI = process.env.DB_URI; //put mongodb in its own file
const connection = mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(async () => {
    console.log("DB Connected");
  })
  .catch((err) => console.log(err));

mongoose.set("useCreateIndex", true);

app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    //  // is this correct???
    extended: true, //should it be true or false
  })
);

app.use(
  cors({
    //origin: "http://localhost3000",
    credentials: true,
  })
);

// must be before passport.initialize and passport.session

app.use(cookieParser(process.env.SECRET));

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.DB_URI,
    }),
    cookie: {
      // cookie is shown on localhost 5000 not 3000
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

//NOTE: The cookie stores the session ID in the browser, and  the seesion ID is then fetched from the DataBase
// as the session is saved in the  Database.
//NOTE: sessions are stored on the server side(express.js application) ,its size is much more bigger than cookies
//NOTE: cookies are stored on the Browser its self it does not store sensitive data

// Session and initialaization
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport); //GOOGLE STRATEGY
require("./config/Local-passport-config"); //LOCAL STRATEGY

app.use("/", require("./routes/HomeRoute"));
app.use("/Register", require("./routes/RegisterRoute"));
app.use("/Login", require("./routes/LoginRoute"));
app.use("/CreateToken", require("./routes/CreateTokenRoute"));
app.use("/Main", require("./routes/MainRoute"));
app.use("/Logout", require("./routes/LogoutRoute"));
app.use("/ViewToken", require("./routes/ViewTokenRoute"));
app.use("/auth", require("./routes/authRoute"));
app.use("/ResetPassword", require("./routes/ResetPasswordRoute"));
app.use("/FilterTokens", require("./routes/FilterTokensRoute"));
app.use("/UserTokens", require("./routes/UserTokensRoute"));
app.use("/FilterUserTokens", require("./routes/FilterUserTokensRoute"));
app.use("/BoughtTokens", require("./routes/BoughtTokensRoute"));
app.use("/BuyTokens", require("./routes/BuyTokensRoute"));
//app.use("/getUserInfo", require("./routes/GetUserInfo"));

app.listen(5000, () => {
  console.log("Server is Running on port 5000");
});
