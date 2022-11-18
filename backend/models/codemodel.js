const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const codesSchema = new Schema({
  codeID: {
    type: String,
    required: true,
  },
  moduleID: {
    type: String,
    required: true,
  },
  weekID: {
    type: Number,
    required: true,
  }
});



module.exports = mongoose.model("Codes", codesSchema);

