const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = mongoose.Schema({
  username: String,
  cardName: String,
  actualName: String,
  category: String, // Art / Tech / Entertainment
  tokensInCirculation: Number,
  marketCap: Number,
  price: Number,
});

// const User = ;

module.exports = mongoose.model("Card", cardSchema);
