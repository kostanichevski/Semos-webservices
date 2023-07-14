// SOAP i REST APIs
// SOAP - XML za transfer
// REST - XML ili JSON za transfer
// API - Application Programming Interface
// REST - Representational state transfer
// npm init -y , npm install express, npm install mongoose, npm install dotenv, npm install ejs

//process.env e mesto kade sto nashata aplikacija zhivee(okolina)

// gi povikuvame paketite
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const db = require("./pkg/db/index");
// inicijalizirame aplikacija
const app = express();

//povikuvanje na exported functions
const movies = require("./handlers/movies");

// povikuvame middlewares
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/movies", movies.getAllMovies);
app.post("/movies", movies.createMovie);
app.get("/movies/:naslov", movies.getMovie);
app.patch("/movies/:id", movies.updateMovie);
app.delete("/movies/:id", movies.deleteMovie);
//izvrsuvanje na init fukncija so koja se konektirame so databaza
db.init();

// slusame aplikacija
app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log("Could not start service");
  }
  console.log("Service started successfully");
});
