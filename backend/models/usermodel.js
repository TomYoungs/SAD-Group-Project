const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  role: {
    type: Number,
    range: [0, 4],
    default: 0,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  Modules: [{
    module: String,
    required: false,
  }],
});

// static register method
userSchema.statics.register = async function (name, email, password) {
  
  //validation
  if (!email || !password || !name) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)){
    throw Error("Not a valid Email")
  }
  if (!validator.isStrongPassword(password)){
    throw Error("Password not strong enough")
  }


  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ name, email, password: hash });

  return user;
}

// static login method
userSchema.statics.login = async function (email, password) {
  //validation
  if (!email || !password) {
    throw Error("All field must be filled");
  }

  
  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Email not found");
  }

  const match = await bcrypt.compare(password, user.password)

  if (!match){
    throw Error('password go brrrr')
  }

  return user
}

module.exports = mongoose.model("User", userSchema);