const express = require('express')
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

//verifies that the user exists so they can do stuff
router.use(requireAuth)
//get all attendances
router.get('/', getAttendance)
//get all attendances with a specified id
router.get('/:id', getAttendance)
