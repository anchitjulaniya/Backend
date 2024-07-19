const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  originalName: {
    type: String,
    required: true,
  },
  newName: {
    type: String,
    required: true,
    unique: true,
  },

  size: {
    type: Number,
    required: true,
  },
});

const fileSchema = mongoose.model("files", schema);

module.exports = fileSchema;
