const express = require("express");
const router = express.Router();

//controller functions
const {
  updateUser,
  createUser,
  getAllUsers,
  modulesUsers,
} = require("../controllers/userController");

//get all users
router.get("/getallusers", getAllUsers); //new change

//require a valid token
router.use(requireAuth);

//update Route
router.patch("/updateuser", updateUser);

//admin create user
router.post("/createuser", createUser);

//get a modules users
router.get("/modulesusers/:id", modulesUsers);

module.exports = router;
