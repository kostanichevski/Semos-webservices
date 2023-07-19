const Telefon = require("../models/telefoniSchema");

exports.getAllTelefoni = async (req, res) => {
  try {
    let telefoni = await Telefon.find();
    res.status(200).json({
      status: "success",
      data: {
        telefoni,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "Fail1",
      message: err,
    });
  }
};

exports.getOneTelefon = async (req, res) => {
  try {
    const telefon = await Telefon.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        telefon,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "Fail at getOne function telefoni.js",
      message: err,
    });
  }
};

exports.createTelefon = async (req, res) => {
  try {
    const newTelefon = await Telefon.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        telefon: newTelefon,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail at create function, telefoni.js",
      message: err,
    });
  }
};

exports.updateTelefon = async (req, res) => {
  try {
    console.log(req.file);
    console.log(req.body);

    const telefon = await Telefon.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        telefon,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail at update function, telefoni.js",
      message: err,
    });
  }
};

exports.deleteTelefon = async (req, res) => {
  try {
    await Telefon.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "Success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail at delete function, telefoni.js",
      message: err,
    });
  }
};
