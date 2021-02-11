const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  date: {
    type: String,
    unique: true,
  },

  // creates an array of ObjectIds in the database and allows the mongoose model
  // for the User to "populate" the notes.
  exercises: [
    {
      duration: {
        type: Number,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      distance: {
        type: Number,
        required: false
      },
      reps: {
        type: Number,
        required: false
      },
      weight: {
        type: Number,
        required: false
      },
      reps: {
        type: Number,
        required: false
      },
      sets: {
        type: Number,
        required: false
      },
      distance: {
        type: Number,
        required: false
      },
    },
  ],
});

const Workout = mongoose.model("Workout", ExerciseSchema);

module.exports = Workout
console.log(Workout)
