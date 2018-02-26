
const mongoose = require('mongoose');

const Coin = mongoose.model('Coin', {
  blocks: Number,
  btc: Number,
  cap: Number,
  createdAt: Date,
  diff: Number,
  mnsOff: Number,
  mnsOn: Number,
  netHash: Number,
  peers: Number,
  status: String,
  supply: Number,
  usd: Number
}, 'coins');

module.exports =  Coin;
