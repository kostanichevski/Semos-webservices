const mongoose = require("mongoose");

const velosipediSchema = new mongoose.Schema({
  tip: {
    type: String,
  },
  brand: {
    type: String,
  },
  model: {
    type: String,
  },
  cena: {
    type: Number,
  },
});

const Velosiped = new mongoose.model("Velosiped", velosipediSchema);

module.exports = Velosiped;
