const Oglas = require("../models/oglasiSchema");

exports.getLoginForm = (req, res) => {
  try {
    res.status(200).render("login", {
      title: "Login",
    });
  } catch (err) {
    res.status(500).send("error");
  }
};

exports.oglasView = async (req, res) => {
  try {
    const oglasi = await Oglas.find();

    res.status(200).render("viewOglasi", {
      status: "Success",
      ime: oglas.name,
      kategorija: oglas.type,
      oglasi,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.createOglas = async (req, res) => {
  try {
    await Oglas.create(req.body);
    res.redirect("/viewOglasi");
  } catch (err) {
    res.status(500).send(err);
  }
};
