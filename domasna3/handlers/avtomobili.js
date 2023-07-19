const Avtomobil = require("../models/avtomobiliSchema");

exports.getAllAvtomobili = async (req, res) => {
  try {
    let avtomobili = await Avtomobil.find();
    res.status(200).json({
      status: "success",
      data: {
        avtomobili,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: " fail at getAll function, avtomobili.js",
      message: err,
    });
  }
};

exports.getOneAvtomobil = async (req, res) => {
  try {
    const avtomobil = await Avtomobil.findById(req.params.id);
    res.status(200).json({
      status: "Success",
      data: {
        avtomobil,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail at getOne function, avtomobili.js",
      message: err,
    });
  }
};

exports.createAvtomobil = async (req, res) => {
  try {
    const newAvtomobil = await Avtomobil.create(req.body);
    res.status(200).json({
      status: "Success",
      data: {
        avtomobil: newAvtomobil,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail at create function, avtomobili.js",
      message: err,
    });
  }
};

exports.deleteAvtomobil = async (req, res) => {
  try {
    await Avtomobil.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "Success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail at delete function, avtomobili.js",
      message: err,
    });
  }
};
