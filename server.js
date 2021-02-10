const mongoose = require("mongoose");
const db = require("./models/user");
// express dependency
const express = require("express");
// calls express
const app = express();
const routes = require("./public/api.js");
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
// For: data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/exercises", (req, res) => {
  db.Book.find({})
    .then((dbBook) => {
      res.json(dbBook);
    })
    .catch((err) => {
      res.json(err);
    });
});

//port listener
app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
