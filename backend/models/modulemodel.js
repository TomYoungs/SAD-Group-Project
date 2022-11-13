const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const moduleSchema = new Schema({
    moduleName: {
      type: String,
      required: true,
    },
    tutors: [{
      lecturer: Schema.Types.ObjectId,
      required: true,
    }]
  });

module.exports = mongoose.model("Module", moduleSchema);