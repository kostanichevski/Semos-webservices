const mongoose = require("mongoose");

const nedvizniniSchema = new mongoose.Schema({
  tip: {
    type: String,
  },
  lokacija: {
    type: String,
    required: [true, "Mora da se navede lokacija"],
  },
  kvadratura: {
    type: Number,
  },
  cena: {
    type: Number,
  },
});

const Nedviznina = new mongoose.model("Nedviznina", nedvizniniSchema);

module.exports = Nedviznina;
