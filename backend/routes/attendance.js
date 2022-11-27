const express = require("express");
const router = express.Router();


const {
  getAttendances,
  getAttendanceByObjectId,
  getAttendanceByModuleId,
  getAttendanceByUserId,
  getAttendanceByUserAndModuleId,
  getAttendanceByModuleIdForCharts,
  updateUserAttendance,
  createAttendance,
  deleteAttendance
} = require("../controllers/attendanceController");

//Get all attendances
router.get("/getallattendance", getAttendances);

//Get a attendances with a attendance id
router.get("/getattendancebyid/:id", getAttendanceByObjectId);

//get all attendances with a module id
router.get('/getbymoduleid/:id', getAttendanceByModuleId)
//get all attendances with a module id
router.get('/getbymoduleidforcharts/:id', getAttendanceByModuleIdForCharts)
//get all attendances with a User id
router.get("/getbyuserid/:id", getAttendanceByUserId);

//get all attendances with a User id & a module id
router.get('/getbyuseridmoduleid/:userID/:moduleID', getAttendanceByUserAndModuleId)

//update attendace using a userID moduleID & weekID
router.patch("/updateuserattendance", updateUserAttendance);

//create a attendance
router.post("/createattendance", createAttendance)

//delete a attendance
router.delete("/deleteattendancebyid/:id", deleteAttendance)



module.exports = router;
