const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb+srv://userA:Xqj48j30UEtWvcti@cluster0.wvill0h.mongodb.net/andysDB?retryWrites=true&w=majority")
.then(() => {console.log("connection established to MongoDB cluster")})
.catch((err) => {console.log(err.stack)});


const Animal = require('./animal');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

// responds to requests to the server for an array with objects of type 'Animal'
app.get("/animals", (req, res, next) => {

  Animal.find()
  .then(documents => {
    console.log(documents)
    console.log("sending animals");
    res.status(200).json({
      animals: documents});
  });

    });

module.exports = app;


//Practice DB passwords and usernames
//me
//94I659gf8esGY3mk
//userA
//Xqj48j30UEtWvcti
