const Oglas = require("../models/oglasiSchema");

exports.createOglas = async (req, res) => {
  try {
    const newOglas = await Oglas.create(req.body);
    res.send(newOglas);
  } catch (err) {
    res.status(400).json({
      status: "fail at createOglas function, oglasHandler.js",
      message: err,
    });
  }
};

exports.getAllOglasi = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    let queryString = JSON.stringify(queryObj);
    queryString = queryString.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    );
    const query = JSON.parse(queryString);
    const oglasi = await Oglas.find(query);
    res.send(oglasi);
  } catch (err) {
    res.status(400).json({
      status: "fail at getAllOglasi function, oglasHandler.js",
      message: err,
    });
  }
};

exports.getAllOglasiByType = async (req, res) => {
  try {
    const { type } = req.params;

    const queryObj = { ...req.query, type };
    let queryString = JSON.stringify(queryObj);
    queryString = queryString.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    );
    const query = JSON.parse(queryString);
    const oglasi = await Oglas.find(query);
    res.send(oglasi);
  } catch (err) {
    res.status(400).json({
      status: "fail at getAllOglasiByType function, oglasHandler.js",
      message: err,
    });
  }
};

exports.updateOglas = async (req, res) => {
  try {
    const updatedOglas = await Oglas.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.send(updatedOglas);
  } catch (err) {
    res.status(400).json({
      status: "fail at updateOglas function, oglasHandler.js",
      message: err,
    });
  }
};

exports.deleteOglas = async (req, res) => {
  try {
    await Oglas.findByIdAndDelete(req.body.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail at deleteOglas function, oglasHandler.js",
      message: err,
    });
  }
};
