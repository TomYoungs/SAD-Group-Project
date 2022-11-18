const Attendance = require('../models/attendancemodel')//change file name to fit cammel case and refactor later
const mongoose = require('mongoose')

//get all
const getAttendances = async (req, res) => {
  const attendances = await Attendance.find({})

  res.status(200).json(attendances)
}

// get record with a specic id
const getAttendanceByObjectId = async (req, res) => {
  const { id } = req.params


  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such attendance records'})
  }

  const attendances = await Attendance.findById(id)

  if (!Attendance) {
    return res.status(404).json({error: 'No such attendance record'})
  }

  res.status(200).json(attendances)
}

// get all attendance records with specified module id
const getAttendanceByModuleId = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such attendance records'})
  }
  const attendances = await Attendance.find({moduleID:id}); {
    return res.status(404).json({error: 'No such attendance record'})
  }
  res.status(200).json(attendances)
}

// get all attendance records with specified module id
const getAttendanceByModuleIdForCharts = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such attendance records'})
  }
  let attendances =[]
  const results = await Attendance.find({moduleID:id});
  {results.map((attendance) => (
      attendances.push(attendance.attendance)
  ))}
  if (!Attendance) {
    return res.status(404).json({error: 'No such attendance record'})
  }

  res.status(200).json(attendances)
}
// get all attendance records with specified User id
const getAttendanceByUserId = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such attendance records'})
  }

  const attendances = await Attendance.find({userID:id},{attendance:1 , _id: 0});

  if (!Attendance) {
    return res.status(404).json({error: 'No such attendance record'})
  }

  res.status(200).json(attendances)
}

// get all attendance records with specified user && module id
const getAttendanceByUserAndModuleId = async (req, res) => {
  const { userID, moduleID } = req.params
  console.log(userID);
  console.log(moduleID);
  if (!mongoose.Types.ObjectId.isValid(userID)&&!mongoose.Types.ObjectId.isValid(moduleID)) {
    return res.status(404).json({error: 'No such attendance records'})
  }

  const attendances = await Attendance.find({userID:userID,moduleID:moduleID},{attendance:1 , _id: 0});

  if (!Attendance) {
    return res.status(404).json({error: 'No such attendance record'})
  }

  res.status(200).json(attendances)
}

module.exports = {
  getAttendances,
  getAttendanceByObjectId,
  getAttendanceByModuleId,
  getAttendanceByUserId,
  getAttendanceByUserAndModuleId,
  getAttendanceByModuleIdForCharts
}
