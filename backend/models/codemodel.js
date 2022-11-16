const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const codesSchema = new Schema({
  codeid: {
    type: String,
    required: true,
  },
  moduleName: {
    type: String,
    required: true,
  },
  weekid: {
    type: Number,
    required: true,
  }
});



module.exports = mongoose.model("Codes", codesSchema);

