const express = require("express");
const router = express.Router();

//controller functions
const {
  getallCodes,
  getaCode,
  createaCode,
} = require("../controllers/codesController");

const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

//get all codes route
router.get("/getallcodes", getallCodes);

//TODO: needs to be updated to work with :id and not be a POST
//get a spesific code based on codeID (seed not _id)
router.post("/getacode", getaCode);

//create a new code
router.post("/createacode", createaCode);

module.exports = router;
