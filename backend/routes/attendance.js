const express = require("express");
const router = express.Router();

const {
  getAttendances,
  getAttendanceByObjectId,
  getAttendanceByModuleId,
  getAttendanceByUserId,
  getAttendanceByUserAndModuleId,
  updateUserAttendance,
  createAttendance,
  deleteAttendance
} = require("../controllers/attendanceController");

//Get all attendances
router.get("/getall", getAttendances);

//Get a attendances with a attendance id
router.get("/getbyobjectid/:id", getAttendanceByObjectId);

//get all attendances with a module id
router.get("/getbymoduleid/:id", getAttendanceByModuleId);

//get all attendances with a User id
router.get("/getbyuserid/:id", getAttendanceByUserId);

//get all attendances with a User id & a module id
router.get('/getByUserIdModuleID/:userID/:moduleID', getAttendanceByUserAndModuleId)

//update attendace using a userID moduleID & weekID
router.patch("/updateuserattendance", updateUserAttendance);

//create a attendance
router.post("/createattendance", createAttendance)

//delete a attendance
router.delete("/deleteattendance/:id", deleteAttendance)



module.exports = router;
