const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
  moduleID: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
  attendance: {
    type: Array,
    required: false,
  },
});

module.exports = mongoose.model("Attendance", attendanceSchema);
