const Attendancemodel = require("../models/attendancemodel"); //change file name to fit cammel case and refactor later
const mongoose = require("mongoose");

// @desc Get all Attendances
// @route GET /getall
// @access Public
const getAttendances = async (req, res) => {
  const attendances = await Attendancemodel.find({});
  if(!attendances){
    res.status(404).json({ error: "no attendances found"})
  }
  res.status(200).json(attendances);
};

// @desc Get a Attendance with a attendance ID
// @route GET /getByObjectId/:id
// @access Public
const getAttendanceByObjectId = async (req, res) => {
  const { id } = req.params;
};

// @desc Get a Attendance with a module ID
// @route GET /getByModuleId/:id
// @access Public
const getAttendanceByModuleId = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such attendance records" });
  }

  const attendances = await Attendancemodel.find(
    { moduleID: id },
    { attendance: 1, _id: 0 }
  );

  if (!Attendancemodel) {
    return res.status(404).json({ error: "No such attendance record" });
  }

  res.status(200).json(attendances);
};

// @desc Get a Attendance with a user ID
// @route GET /getByUserId/:id
// @access Public
const getAttendanceByUserId = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such attendance records" });
  }
  if (!weekID || typeof weekID != "number" || !moduleID || !userID) {
    return res.status(404).json({ error: "missing values" });
  }

  const attendances = await Attendancemodel.find(
    { userID: id },
    { attendance: 1, _id: 0 }
  );
  console.log("HERE");
  const attendance = await Attendancemodel.findOne({ moduleID: moduleid });

  if (!attendance) {
    return res.status(404).json({ error: "No such attendance record" });
  }

  res.status(200).json(attendances);
};

// @desc Update a users+module attendance
// @route PATCH /updateuserattendance
// @access Public
const updateUserAttendance = async (req, res) => {
  const { weekID, moduleID, userID } = req.body;

  if (!weekID || typeof weekID != "number" || !moduleID || !userID) {
    return res.status(404).json({ error: "missing values" });
  }

  console.log("HERE");
  const attendance = await Attendancemodel.findOne({ moduleID: moduleID });

  if (!attendance) {
    return res.status(404).json({ error: "No such attendance record" });
  }

  const weeks = attendance.attendance;
  weeks[weekID - 1] = true;

  //TODO: may change names
  const updateuserattendance = await Attendancemodel.findOneAndUpdate(
    { _id: attendance._id },
    {
      attendance: weeks,
    }
  );

  res.status(200).json(updateuserattendance);
};

// @desc Create a attendance
// @route POST /createattendance
// @access Public

const createAttendance = async (req, res) => {
  const { moduleID, userID } = req.body;

  if (!moduleID || !userID) {
    return res.status(400).json({ error: "Please fill in all the fields" });
  }
  // add to the database

  try {
    const attendance = await Attendancemodel.create({ moduleID, userID });
    res.status(200).json(attendance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a module
const deleteAttendance = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such attendance" });
  }

  const attendance = await Attendancemodel.findOneAndDelete({ _id: id });

  if (!attendance) {
    return res.status(404).json({ error: "No such attendance" });
  }

  res.status(200).json(attendance);
}

module.exports = {
  getAttendances,
  getAttendanceByObjectId,
  getAttendanceByModuleId,
  getAttendanceByUserId,
  updateUserAttendance,
  createAttendance,
  deleteAttendance
};
