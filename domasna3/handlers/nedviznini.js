// const { TopologyDescription } = require("mongodb");
const Nedviznina = require("../models/nedvizniniSchema");

exports.getAllNedviznini = async (req, res) => {
  try {
    let nedviznini = await Nedviznina.find();
    res.status(200).json({
      status: "success",
      data: {
        nedviznini,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail at getAll function, nedviznini.js",
      message: err,
    });
  }
};

exports.createNedviznina = async (req, res) => {
  try {
    const newNedviznina = await Nedviznina.create(req.body);
    res.status(200).json({
      status: "Success",
      data: {
        nedviznina: newNedviznina,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail at create function, nedviznini.js",
      message: err,
    });
  }
};

exports.getOneNedviznina = async (req, res) => {
  try {
    const nedviznina = await Nedviznina.findById(req.params.id);
    res.status(200).json({
      status: "Success",
      data: {
        nedviznina,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail at getOne function, nedviznini.js",
      message: err,
    });
  }
};

exports.deleteNedviznina = async (req, res) => {
  try {
    await Nedviznina.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "Success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail at delete function, nedviznini.js",
      message: err,
    });
  }
};
