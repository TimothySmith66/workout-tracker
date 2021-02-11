const mongoose = require("mongoose");
const path = require("path");
const db = require("./models/user");
// express dependency
const express = require("express");
// calls express
const app = express();
const PORT = process.env.PORT || 3001;


// For: data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/html-routes")(app);

app.post("/exercise", ({body}, res) => {
Workout.create(body)
  .then(dbWorkout => {
    console.log(dbWorkout);
  })
  .catch(({ message }) => {
    console.log(message);
  });
});

// app.get("/exercise", (req, res) => {
//   db.Workout.find({})
//     .populate("exercises")
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });


//port listener
app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
