const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  user: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Note = mongoose.model("pronote", noteSchema);

module.exports = Note;
