const express = require('express')
const router = express.Router()

const {updateUserAttendance} = require('../controllers/attendanceController')
// //get all attendances
// router.get('/', getAttendance)
// //get all attendances with a specified id
// router.get('/:id', getAttendanceByModuelId)

router.patch('/updateuserattendance', updateUserAttendance)

module.exports = router
