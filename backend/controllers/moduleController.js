const Module = require("../models/modulemodel");
const mongoose = require("mongoose");

// get all Modules
const getAllModules = async (req, res) => {
  const modules = await Module.find({}).sort({ createdAt: -1 });

  res.status(200).json(modules);
};

// get a single module
const getModulesById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such module" });
  }

  const module = await Module.findById(id);

  if (!module) {
    return res.status(404).json({ error: "No such module" });
  }

  res.status(200).json(module);
};

// create a new module
const createModule = async (req, res) => {
  const { name, Tutors } = req.body;

  if (!name || !Array.isArray(Tutors) || !Tutors.length) {
    return res.status(400).json({ error: "Please fill in all the fields" });
  }
  // add to the database
  try {
    const module = await Module.create({ name, Tutors });
    res.status(200).json(module);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a module
const deleteModule = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such module" });
  }

  const module = await Module.findOneAndDelete({ _id: id });

  if (!module) {
    return res.status(404).json({ error: "No such module" });
  }

  res.status(200).json(module);
};

// update a module
const updateModule = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such id" });
  }

  const module = await Module.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!module) {
    return res.status(404).json({ error: "No such module" });
  }

  res.status(200).json(module);
};


// search for all modules with one specified tutor
const getModulesByTutor = async (req, res) => {
  const { tutor } = req.params;
  console.log(tutor);
  if (!tutor) {
    return res.status(400).json({ error: "Invalid name" });
  }
  const results = await Module.find({Tutors:tutor});
  if (!results) {
    return res.status(404).json({error: 'No modules found for user'})
  }

  res.status(200).json(results)
};



// @desc get a module based on userid (a teacher)
// @route GET /getausersmodule
// @access Public
const getaUsersModule = async (req, res) => {
  //TODO: might need a check of 'role'
  const { id } = req.params;
  console.log("HERE")
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "invalid userID" });
  }

  const module = await Module.find({ Tutors: id});

  if (!module) {
    return res.status(404).json({ error: "No such module found" });
  }

  res.status(200).json(module);
}


module.exports = {
  getAllModules,
  getModulesById,
  createModule,
  deleteModule,
  updateModule,
  getModulesByTutor,

  getaUsersModule

};
