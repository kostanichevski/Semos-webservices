const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const db = require("./pkg/index");
const jwt = require("express-jwt");
const ejs = require("ejs");
const authHandler = require("./handlers/Handler");

const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.init();

app.use(
  jwt
    .expressjwt({
      algorithms: ["HS256"],
      secret: process.env.JWT_SECRET,
    })
    .unless({
      path: ["/webservis/signup", "/webservis/login"],
    })
);

app.post("/webservis/signup", authHandler.signup);
app.post("/webservis/login", authHandler.login);

app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log("Could not start service");
  }
  console.log("Service started successfully");
});
