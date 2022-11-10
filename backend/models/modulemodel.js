const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const moduleSchema = new Schema({
    nameOfModule: {
      type: String,
      required: true,
    },
    tutor1: {
      type: String,
      required: true,
    },
    tutor2: {
      type: String,
    },
    tutor3: {
      type: String,
    },
    tutor4: {
      type: String,
    },
  });

module.exports = mongoose.model("Module", moduleSchema);