const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
  moduleName: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
  attendance: [{
    type: Boolean,
    required: false,
    default: false,
  }],
});

module.exports = mongoose.model("Attendance", attendanceSchema);