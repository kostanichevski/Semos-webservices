const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const db = require("./db/index");
const jwt = require("express-jwt");

const oglasHandler = require("./handlers/oglasHandler");
const viewHandler = require("./handlers/viewHandler");
const authHandler = require("./handlers/authHandler");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
db.init();

app.use(
  jwt
    .expressjwt({
      algorithms: ["HS256"],
      secret: process.env.JWT_SECRET,
      getToken: (req) => {
        if (
          req.headers.authorization &&
          req.headers.authorization.split(" ")[0] === "Bearer"
        ) {
          return req.headers.authorization.split(" ")[1];
        }
        if (req.cookies.jwt) {
          return req.cookies.jwt;
        }
        return null;
      },
    })
    .unless({
      path: ["/oglasi", "/api/v1/login", "/api/v1/signup", "/login"],
    })
);

app.post("/api/v1/signup", authHandler.signup);
app.post("/api/v1/login", authHandler.login);

app.get("/oglasi", oglasHandler.getAllOglasi);
app.get("/oglasi/:type", oglasHandler.getAllOglasiByType);
app.post("/oglasi/newOglas", oglasHandler.createOglas);
app.patch("/oglasi/:id", oglasHandler.updateOglas);
app.delete("/oglasi/:id", oglasHandler.deleteOglas);

//view ruti
app.get("/viewOglasi", viewHandler.oglasView);
app.get("/login", viewHandler.getLoginForm);
app.post("/createOglas", viewHandler.createOglas);

app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log("Could not start service");
  }
  console.log(`Service started successfully on port ${process.env.PORT}`);
});
