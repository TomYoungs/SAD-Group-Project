const express = require("express");
const router = express.Router();

//controller functions
const {
  loginUser,
  registerUser,
} = require("../controllers/userController");

//login Route
router.post("/login", loginUser);

//register Route
router.post("/register", registerUser);

module.exports = router;
