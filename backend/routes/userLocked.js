const express = require("express");
const router = express.Router();

//controller functions
const {
  updateUser,
  createUser,
  getUsers,
  modulesUsers,
} = require("../controllers/userController");

const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

//get all users
router.get("/getall", getUsers);

//update Route
router.patch("/updateuser", updateUser);

//admin create user
router.post("/createuser", createUser);

//get a modules users
router.get("/modulesusers/:id", modulesUsers);

module.exports = router;
