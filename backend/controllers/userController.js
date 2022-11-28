const User = require("../models/usermodel");
const Module = require("../models/modulemodel");
const Attendance = require("../models/attendancemodel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// get all Modules
const getAllUsers = async (req, res) => {
  const users = await User.find({}).sort({ createdAt: -1 });

  res.status(200).json(users);
};

// @desc validate user
// @route POST /login
// @access Public
const loginUser = async (req, res) => {

  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    //create a token
    const token = createToken(user._id);
    const role = user.role;
    const id = user._id;

    res.status(200).json({ email, token, role, id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc create user
// @route POST /register
// @access Public
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.register(name, email, password);
        //create a token
        const token = createToken(user._id)
        const id = user._id
        res.status(200).json({email, id, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};


//TODO: use auth since now update is fully open!

// @desc Update a user
// @route PATCH /updateuser
// @access Public
const updateUser = async (req, res) => {
  const { role, name, email, password, Modules } = req.body;
  try {
    //validation
    if (
      typeof role != "number" ||
      !email ||
      !name ||
      !Array.isArray(Modules) ||
      !Modules.length
    ) {
      //modules is an array so may not work
      throw Error("All fields must be filled/valid");

    }

    const user = await User.findOne({ email });

    if (!user) {
      throw Error("User not found");
    }

    user.role = role;
    user.email = email;
    user.name = name;
    user.Modules = Modules;

    if (password) {
      //hash pwd
      user.password = await bcrypt.hash(password, 10); // salt rounds
    }
    const updatedUser = await user.save();

    res.status(200).json({ message: `${updatedUser.email} updated` });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc Create a full user
// @route POST /createuser
// @access Public
const createUser = async (req, res) => {
  const { role, name, email, password, Modules } = req.body;

  if (
    typeof role != "number" ||
    !email ||
    !name ||
    !Array.isArray(Modules) ||
    !Modules.length
  ) {
    //modules is an array so may not work
    return res.status(400).json({ error: "Please fill in all the fields" });
  }
  try {
    const module_id = req.Modules;
    const user = await User.register(name, role, email, password, module_id);

    //create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc Search for users based on moduleID
// @route get /modulesusers
// @access Public
const modulesUsers = async (req, res) => {
  //take in an array of TutorsID
  const { id } = req.params;

  if (!id) {
    return res.status(404).json({ error: "invalid user ID" });
  }

  const listmodules = await Module.find({ Tutors: id});

  if (!listmodules) {
    return res.status(404).json({ error: "no modules found" });
  }

  async function getTutorUsers(module, index){
    return await User.find({ Modules: module._id})
  }

  const tutorusers = await Promise.all(
    listmodules.map(getTutorUsers)
  )

  if (!tutorusers) {
    return res.status(404).json({ error: "No users found" });
  }


  const filtTutorUsers = tutorusers.filter(el => {
    return !(el.every(element => element === (undefined || null || '')));
  })

  res.status(200).json(filtTutorUsers)
}

const deleteUser = async (req, res) => {
  const { _id } = req.params;

  if (!_id) {
    return res.status(404).json({ error: "please enter all fields" });
  }

  try {
    const user = await User.findOneAndDelete({ _id: _id });
    const attendance = await Attendance.deleteMany({ userID: _id });
    const modules = await Module.updateMany({},
      { $pull: { Tutors: _id }});
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {

  loginUser,
  registerUser,
  updateUser,
  createUser,
  getAllUsers,
  modulesUsers,
  deleteUser,
};
