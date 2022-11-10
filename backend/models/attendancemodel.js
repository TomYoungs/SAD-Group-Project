const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
    week1: {
      type: Boolean,
    },
    week2: {
      type: Boolean,
    },
    week3: {
      type: Boolean,
    },
    week4: {
      type: Boolean,
    },
    week5: {
      type: Boolean,
    },
    week6: {
      type: Boolean,
    },
    week7: {
      type: Boolean,
    },
    week8: {
      type: Boolean,
    },
    week9: {
      type: Boolean,
    },
    week10: {
      type: Boolean,
    },
    week11: {
      type: Boolean,
    },
    week12: {
      type: Boolean,
    },
  });

module.exports = mongoose.model("Attendance", attendanceSchema);