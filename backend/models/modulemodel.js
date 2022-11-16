const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const moduleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  Tutors: [String],
});

module.exports = mongoose.model("Module", moduleSchema);