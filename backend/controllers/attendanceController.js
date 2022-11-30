const Attendancemodel = require("../models/attendancemodel"); //change file name to fit cammel case and refactor later
const mongoose = require("mongoose");

// @desc Get all Attendances
// @route GET /getallattendance
// @access Public
const getAllAttendance = async (req, res) => {
  const attendances = await Attendancemodel.find({});
  if(!attendances){
    res.status(404).json({ error: "no attendances found"})
  }
  res.status(200).json(attendances);
};

// @desc Get a Attendance with a attendance ID
// @route GET /getattendancebyid/:id 
// @access Public
const getAttendanceById = async (req, res) => {
  const { id } = req.params;
};

// @desc Get a Attendance with a module ID
// @route GET /getbymoduleid/:id
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
// @route GET /getbyuserid/:id
// @access Public
const getAttendanceByUserId = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such attendance records" });
  }
  const attendance = await Attendancemodel.find({userID:id});
  if (!attendance) {
    return res.status(404).json({error: 'No such attendance record'})
  }

  res.status(200).json(attendance)
}

// get all attendance records with specified module id
const getAttendanceByModuleIdForCharts = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such attendance records'})
  }
  let attendances =[]
  const results = await Attendancemodel.find({moduleID:id});
  {results.map((attendance) => (
      attendances.push(attendance.attendance)
  ))}
  if (!results) {
    return res.status(404).json({error: 'No such attendance record'})
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

  const attendance = await Attendancemodel.findOne({ moduleID: moduleID });

  if (!attendance) {
    return res.status(404).json({ error: "No such attendance record" });
  }

  const weeks = attendance.attendance;
  weeks[weekID - 1] = true;

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


// get all attendance records with specified user && module id
const getByUserIDmoduleID = async (req, res) => {
  const { userID, moduleID } = req.body
  
  if (!userID || !moduleID) {
    return res.status(404).json({error: 'No such attendance records'})
  }

  const attendance = await Attendancemodel.findOne({userID:userID, moduleID:moduleID},{attendance:1 , _id: 0});

  if (!attendance) {
    return res.status(404).json({error: 'No such attendance record'})
  }

  res.status(200).json(attendance)
}

module.exports = {
  getAllAttendance,
  getAttendanceById,
  getAttendanceByModuleId,
  getAttendanceByUserId,
  getByUserIDmoduleID,
  getAttendanceByModuleIdForCharts,
  updateUserAttendance,
  createAttendance,
  deleteAttendance
};
