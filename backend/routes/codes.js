const express = require("express");
const router = express.Router();

//controller functions
const {
  getAllCodes,
  getACode,
  createACode,
  updateACode,
  deleteACode,
} = require("../controllers/codesController");

const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

//get all codes route
router.get("/getallcodes", getAllCodes);

//get a spesific code based on codeID (seed not _id)
router.post("/getacode", getACode);

//create a new code
router.post("/createacode", createACode);

//create a new code
router.patch("/updateacode", updateACode);

//create a new code
router.delete("/deleteacode", deleteACode);

module.exports = router;
