const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
dotenv.config();
// const Test = require("./path/to/Test"); // Adjust the path accordingly
const Test = require("./model/test"); // Adjust the path accordingly
const Announcement = require("./model/Announcement");

// cros
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE,OPTIONS"
  );

  next();
});

// dotenv.config({ path: "./config.env" });
require("./db/conn");
// const User = require('./model/userSchema');
app.use(express.json());

// we link the router files to make our route easy
app.use(require("./router/auth"));

const PORT = process.env.PORT;

// middelware

const middleware = (req, res, next) => {
  console.log("Hello my Miiddleware");
  next();
};

app.get("/", (req, res) => {
  res.send("hello world from the server app js");
});

app.get("/about", (req, res) => {
  console.log("Hello my About");
  res.send("Hello About world from the server");
});

app.get("/contact", (req, res) => {
  res.send("hello about page");
  next();
});

app.get("/signin", (req, res) => {
  res.send("Hello signin page");
});

app.use(cookieParser());

// cookies
// app.get("/set-cookies", (req, res) => {
//   // res.setHeader("Set-Cookie", "newUser=true");
//   res.cookie("newUser", false);
//   res.cookie("isEmployee", true, {
//     maxAge: 1000 * 60 * 60 * 24,
//     httpOnly: true,
//   });

//   res.send("you got the cookies!");
// });

// app.get("/read-cookies", (req, res) => {
//   const cookies = req.cookies;
//   console.log(cookies.newUser);

//   res.json(cookies);
// });

app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
});
