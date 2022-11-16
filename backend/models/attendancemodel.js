const mongoose = require("mongoose");
const usermodel = require("./usermodel");

const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
  moduleName: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  attendance: [{
    type: Boolean,
    required: false,
    default: false,
  }],
});

module.exports = mongoose.model("Attendance", attendanceSchema);