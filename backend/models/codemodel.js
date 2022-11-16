const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const codesSchema = new Schema({
  code: {
    type: String,
    required: true,
  },
  modulename: {
    type: String,
    required: true,
  },
  weekid: {
    type: number,
    required: true,
  }
});



module.exports = mongoose.model("Module", moduleSchema);

