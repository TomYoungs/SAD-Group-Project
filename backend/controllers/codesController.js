const Codes = require("../models/codemodel");
const mongoose = require("mongoose");


// @desc Get all codes
// @route GET /getallcodes
// @access Public
const getallCodes = async (req, res) => {
  const codes = await Codes.find({}).sort({ createdAt: -1 });

  res.status(200).json(codes);
};

//TODO: currently a post needs to be updated
// @desc Get a codes
// @route POST /getacode
// @access Public
const getaCode = async (req, res) => {
  const { codeID } = req.body;
  if (!codeID) {
    return res.status(404).json({ error: "please enter code" });
  }

  const resultcode = await Codes.findOne({ codeID });
  if (!resultcode) {
    return res.status(404).json({ error: "invalid code" });
  }

  res.status(200).json(resultcode);
};

// @desc Create a code
// @route POST /getacode
// @access Public
const createaCode = async (req, res) => {
  const { moduleID, weekID } = req.body;

  if (!moduleID || !weekID) {
    return res.status(404).json({ error: "please enter all fields" });
  }

  //TODO: check if module ID exists

  //TODO: check if seed is unique
  const codeID = Math.random().toString(36).slice(6)
  try {
    const code = await Codes.create({ codeID, moduleID, weekID });
    res.status(200).json(code);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateacode = async (req, res) => {
  const { _id, moduleID, weekID, expires} = req.body;

  if (!_id || !moduleID || !weekID) {
    return res.status(404).json({ error: "please enter all fields" });
  }

  const codeID = Math.random().toString(36).slice(6)
  try {
    const code = await Codes.findOneAndUpdate(
      { _id: _id },
      {
        codeID: codeID,
        moduleID: moduleID,
        weekID: weekID,
        expires: expires,
      },
      {new: true}
    );
    res.status(200).json(code);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteacode = async (req, res) => {
  const { _id } = req.body;

  if (!_id) {
    return res.status(404).json({ error: "please enter all fields" });
  }

  try {
    const code = await Codes.findOneAndDelete({ _id: _id });
    res.status(200).json(code);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getallCodes,
  getaCode,
  createaCode,
  updateacode,
  deleteacode,
};
