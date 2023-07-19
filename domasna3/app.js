const express = require("express");
const jwt = require("express-jwt");
const db = require("./db/index");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");

//middlewares
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
      path: [
        "/api/v1/signup",
        "/api/v1/login",
        "/telefoni",
        "/velosipedi",
        "/nedviznini",
        "/avtomobili",
      ],
    })
);
const telefoni = require("./handlers/telefoni");
const avtomobili = require("./handlers/avtomobili");
const velosipedi = require("./handlers/velosipedi");
const nedviznini = require("./handlers/nedviznini");
const authHandler = require("./handlers/authHandler");

app.post("/api/v1/signup", authHandler.signup);
app.post("/api/v1/login", authHandler.login);

//telefoni
app.get("/telefoni", telefoni.getAllTelefoni);
app.get("/telefoni/:id", telefoni.getOneTelefon);
app.post("/telefoni/create", telefoni.createTelefon);
app.patch("/telefoni/update/:id", telefoni.updateTelefon);
app.delete("/telefoni/delete/:id", telefoni.deleteTelefon);

//avtomobili
app.get("/avtomobili", avtomobili.getAllAvtomobili);
app.get("/avtomobili/:id", avtomobili.getOneAvtomobil);
app.post("/avtomobili/create", avtomobili.createAvtomobil);
app.delete("/avtomobili/delete/:id", avtomobili.deleteAvtomobil);

//nedviznini
app.get("/nedviznini", nedviznini.getAllNedviznini);
app.get("/nedviznini/:id", nedviznini.getOneNedviznina);
app.delete("/nedviznini/delete/:id", nedviznini.deleteNedviznina);
app.post("/nedviznini/create", nedviznini.createNedviznina);

//velosipedi
app.get("/velosipedi", velosipedi.getAllVelosipedi);
app.get("/velosipedi/:id", velosipedi.getOneVelosiped);
app.delete("/velosipedi/delete/:id", velosipedi.deleteVelosiped);
app.post("/velosipedi/create", velosipedi.createVelosiped);

app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log("Could not start service");
  }
  console.log(
    `Service has been started successfully on port ${process.env.PORT}`
  );
});
