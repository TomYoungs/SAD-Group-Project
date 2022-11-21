//const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require('jsonwebtoken')



module.exports = {
  checkPassword: function(){
    const pword = "StrongPass63!";
    return validator.isStrongPassword(pword);
  },
  validEmail:function(){
    const email = "johndoe@gmail.com";
    return validator.isEmail(email);
  },
  checkHashPassword: function(){
    const password = "Mypass#123";
    const salt = bcrypt.genSalt(10);
    const hash = bcrypt.hash(password, salt);
    return hash;
  },
  createToken: function(){
    const _id =  5;
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
  }
}

//dev@dev.com
//Mypass#123 

//$2b$10$IYCw7eb.xdg5F8Qgt/ifBe5LLL99Kdi48PxDlkVo706Ufm2lUz79m
/*// static register method
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

module.exports = {
    register
}*/