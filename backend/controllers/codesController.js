const Codes = require("../models/codemodel");
const mongoose = require("mongoose");

// get all Codes
const getallCodes = async (req, res) => {
  const codes = await Codes.find({}).sort({ createdAt: -1 });

  res.status(200).json(codes);
};

const getaCode = async (req, res) => {
  const { codeid } = req.body;
  if (!codeid ){
    return res.status(404).json({ error: "please enter code" });
  }

  const resultcode = await Codes.findOne({codeid});

  if (!resultcode) {
    return res.status(404).json({ error: "invalid code" });
  }

  res.status(200).json(resultcode);
};

// @desc Create a code
// @route POST /getacode
// @access Public
const createaCode = async (req, res) => {
  const { moduleName, weekid } = req.body
  
  if (!moduleName || !weekid) {
    return res.status(404).json({ error: "please enter all fields" });
  }
  const codeid = (Math.random() * 1000000000)
  //check if seed is unique
  try {
    const code = await Codes.create({codeid, moduleName, weekid})
    res.status(200).json(code);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getallCodes,
  getaCode,
  createaCode
};
