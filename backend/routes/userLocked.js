const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");

//controller functions
const {
  updateUser,
  createUser,
  getAllUsers,
  modulesUsers,
  deleteUser,
} = require("../controllers/userController");

//get all users
router.get("/getallusers", getAllUsers);

//require a valid token
router.use(requireAuth);

//update Route
router.patch("/updateuser", updateUser);

//admin create user
router.post("/createuser", createUser);

//get a modules users
router.get("/modulesusers/:id", modulesUsers);

router.delete("/deleteuser/:_id", deleteUser);

module.exports = router;
