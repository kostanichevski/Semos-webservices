const mongoose = require("mongoose");

const oglasiSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["avtomobili", "nedviznini", "telefoni", "velosipedi"],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  kvadratura: {
    type: Number,
  },
  km: {
    type: Number,
  },
});

const Oglas = mongoose.model("Oglas", oglasiSchema);

module.exports = Oglas;
