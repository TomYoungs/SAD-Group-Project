const express = require("express");
const router = express.Router();

//controller functions
const {loginUser, registerUser, updateUser, createUser, getAllUsers, modulesUsers, deleteUser} = require('../controllers/userController')

//get all users
router.get('/getallusers', getAllUsers)    //new change

//login Route
router.post("/login", loginUser);

//register Route
router.post("/register", registerUser);

//update Route
router.patch("/updateuser", updateUser);

//admin create user
router.post("/createuser", createUser);

//get a modules users
router.get("/modulesusers/:id", modulesUsers);

router.delete("/deleteuser/:_id", deleteUser);

module.exports = router;
