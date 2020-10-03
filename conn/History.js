const mongoose = require("mongoose");

const history = new mongoose.Schema({
  buyExecuted: {
    type: Boolean,
  },
  tickerSymbol: {
    type: String,
  },
  tickerName: {
    type: String,
  },
  buyMarketPrice: {
    type: Number,
  },
  boughtShares: {
    type: Number,
  },
  sellExecuted: {
    type: Boolean,
  },
  sellLimitPrice: {
    type: Number,
  },
  created_at: {
    type: Date,
  },
});

module.exports = History = mongoose.model("History", history);
