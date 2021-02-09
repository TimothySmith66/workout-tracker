const mongoose = require('mongoose');

// express dependency
const express = require('express');
// calls express 
 const app = express();
 const routes = require("./api.js");
 const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
// For: data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))



  app.get('/', (req, res) => {
    res.send('Hi!')
  })

//port listener
app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});

