const express = require('express')
const router = express.Router()

//controller functions
const {loginUser, registerUser, updateUser, createUser} = require('../controllers/userController')

//login Route
router.post('/login', loginUser)

//register Route
router.post('/register', registerUser)

//update Route
router.patch('/updateuser', updateUser)

//admin create user
router.post('/createuser', createUser)


module.exports = router