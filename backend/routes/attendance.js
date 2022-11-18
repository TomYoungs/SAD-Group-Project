const express = require('express')
const {
  getAttendances,
  getAttendanceByObjectId,
  getAttendanceByModuleId,
  getAttendanceByUserId
} = require('../controllers/attendanceController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

//verifies that the user exists so they can do stuff
//router.use(requireAuth) //disabled during testing
//get all attendances
router.get('/getAll', getAttendances)
//get all attendances with a specified id
router.get('/getByObjectId/:id', getAttendanceByObjectId)
//get all attendances with a module id
router.get('/getByModuleId/:id', getAttendanceByModuleId)
//get all attendances with a User id
router.get('/getByUserId/:id', getAttendanceByUserId)

module.exports = router
