const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const moduleSchema = new Schema({
    nameOfModule: {
      type: String,
      required: true,
    },
    tutors: {
      lecturer: [userSchema],
      required: true,
    }
  });

module.exports = mongoose.model("Module", moduleSchema);