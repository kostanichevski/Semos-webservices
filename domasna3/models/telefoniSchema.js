//model
//godina
//cena

const mongoose = require("mongoose");

const telefoniSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: [true, "Mora da se navede brand na telefonot"],
  },
  model: {
    type: String,
  },
  godina: {
    type: Number,
  },
  cena: {
    type: Number,
  },
});

const Telefon = mongoose.model("Telefon", telefoniSchema);

module.exports = Telefon;
