const Codes = require("../models/codesmodel");
const mongoose = require("mongoose");

// get all Codes
const getallCodes = async (req, res) => {
  const codes = await Codes.find({}).sort({ createdAt: -1 });

  res.status(200).json(codes);
};

const getaCode = async (req, res) => {
  const { code } = req.body;
  if (!code ){
    return res.status(404).json({ error: "please enter code" });
  }

  const resultcode = await Codes.findOne(code);

  if (!resultcode) {
    return res.status(404).json({ error: "invalid code" });
  }

  res.status(200).json(resultcode);
};

module.exports = {
  getallCodes,
  getaCode
};
