const mongoose = require("mongoose");
const db = require("./models/user");

app.post("/api/exercise", (req, res) => {

    Workout.create({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      
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