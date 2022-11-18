const express = require("express");
const router = express.Router();

const {
  getAttendances,
  getAttendanceByObjectId,
  getAttendanceByModuleId,
  getAttendanceByUserId,
  updateUserAttendance,
} = require("../controllers/attendanceController");

//Get all attendances
router.get("/getall", getAttendances);

//Get a attendances with a attendance id
router.get("/getbyobjectid/:id", getAttendanceByObjectId);

//get all attendances with a module id
router.get("/getbymoduleid/:id", getAttendanceByModuleId);

//get all attendances with a User id
router.get("/getbyuserid/:id", getAttendanceByUserId);

//update attendace using a userID moduleID & weekID
router.patch("/updateuserattendance", updateUserAttendance);

module.exports = router;
