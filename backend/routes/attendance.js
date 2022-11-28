const express = require("express");
const router = express.Router();


const {
  getAllAttendance,
  getAttendanceById,
  getAttendanceByModuleId,
  getAttendanceByUserId,
  getByUserIDmoduleID,
  getAttendanceByModuleIdForCharts,
  updateUserAttendance,
  createAttendance,
  deleteAttendance
} = require("../controllers/attendanceController");

//Get all attendances
router.get("/getallattendance", getAllAttendance);

//Get a attendances with a attendance id
router.get("/getattendancebyid/:id", getAttendanceById);

//get all attendances with a module id
router.get('/getbymoduleid/:id', getAttendanceByModuleId)
//get all attendances with a module id
router.get('/getbymoduleidforcharts/:id', getAttendanceByModuleIdForCharts)
//get all attendances with a User id
router.get("/getbyuserid/:id", getAttendanceByUserId);

//get all attendances with a User id & a module id
router.post('/getbyuseridmoduleid', getByUserIDmoduleID)

//update attendace using a userID moduleID & weekID
router.patch("/updateuserattendance", updateUserAttendance);

//create a attendance
router.post("/createattendance", createAttendance)

//delete a attendance
router.delete("/deleteattendancebyid/:id", deleteAttendance)



module.exports = router;
