const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },

  // creates an array of ObjectIds in the database and allows the mongoose model
  // for the User to "populate" the notes.
  exercises: [
    {
      duration: {
        type: Number,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      distance: {
        type: String,
        required: false,
      },
      reps: {
        type: String,
        required: false,
      },
      weight: {
        type: String,
        required: false,
      },
      reps: {
        type: String,
        required: false,
      },
      sets: {
        type: String,
        required: false,
      },
      distance: {
        type: String,
        required: false,
      },
    },
  ],
});

const exercise = mongoose.model("user", exerciseSchema);

module.exports = exercise;
