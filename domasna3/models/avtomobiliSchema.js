const mongoose = require("mongoose");

const avtomobiliSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: [true, "Mora da se navede brand na avtomobilot"],
  },
  model: {
    type: String,
  },
  godina: {
    type: Number,
  },
  km: {
    type: Number,
  },
  cena: {
    type: Number,
  },
});

const Avtomobil = mongoose.model("Avtomobil", avtomobiliSchema);

module.exports = Avtomobil;
