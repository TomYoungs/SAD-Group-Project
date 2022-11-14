const Attendance = require('../models/attendancemodel')//change file name to fit cammel case and refactor later
const mongoose = require('mongoose')

//get all
const getAttendances = async (req, res) => {
  const Attendance = await Workout.find({}).sort({createdAt: -1})

  res.status(200).json(Attendance)
}

// get all records with specified id
const getAttendance = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such attendance records'})
  }

  const Attendance = await Attendance.find(id)

  if (!Attendance) {
    return res.status(404).json({error: 'No such attendance record'})
  }

  res.status(200).json(Attendance)
}