const Velosiped = require("../models/velosipediSchema");

exports.createVelosiped = async (req, res) => {
  try {
    const newVelosiped = await Velosiped.create(req.body);
    res.status(200).json({
      status: "Success",
      data: {
        velosiped: newVelosiped,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail at create function, velosipedi.js",
      message: err,
    });
  }
};

exports.getAllVelosipedi = async (req, res) => {
  try {
    let velosipedi = await Velosiped.find();
    res.status(200).json({
      status: "Success",
      data: {
        velosipedi,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail at getAll function, velosipedi.js",
      message: err,
    });
  }
};

exports.getOneVelosiped = async (req, res) => {
  try {
    const velosiped = await Velosiped.findById(req.params.id);
    res.status(200).json({
      status: "Success",
      data: {
        velosiped,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail at getOne function, velosipedi.js",
      message: err,
    });
  }
};

exports.deleteVelosiped = async (req, res) => {
  try {
    await Velosiped.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "Success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail at delete function, velosipedi.js",
      message: err,
    });
  }
};
