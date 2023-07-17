const User = require("../models/model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const token = jwt.sign(
      { id: newUser._id, name: newUser.name },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES }
    );

    res.cookie("jwt", token, {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
      ),
      secure: false,
      httpOnly: true,
    });
    res.status(200).json({
      status: "Success",
      token,
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    return res.status(400).send(err);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("Please provide email and password");
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send("A user with this email doesn't exist");
    }
    const isPasswordValid = bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).send("Invalid email or password");
    }
    const token = jwt.sign(
      { id: user._id },
      { name: user.name },
      process.emitWarning.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES }
    );
    res.cookie("jwt", token, {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
      ),
    });
    res.status(200).json({
      status: "Success",
      token,
    });
  } catch (err) {
    return res.status(404).send("Internal server error");
  }
};

exports.protect = async (req, res) => {
  try {
  } catch (err) {}
};
