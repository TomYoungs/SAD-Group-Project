const bcrypt = require('bcrypt');
const mongoose = require("mongoose");


let userList = [];
let staffList =[];
let moduleList =[];
//for ease all users will have the same password TestPassword1!
//and the email for all users will be there name plus @gmail.com
let hash = ("$2a$10$Rpr1p7cM/20GfnEYQDgJIe98qkVNJ2KZxYc7V88nNAtnYNj7gjhKq");

db.users.remove({});

db.modules.remove({});

db.attendances.remove({});
//generates 3 staff members

let  user =
{
  _id: ObjectId(),
  name: "Nnamdi",
  email: "nnamdi" +"@gmail.com",
  password: hash,
  role: 1,
  Modules:[]
}
staffList.push(user);
db.users.insert(user);
 user =
{
  _id: ObjectId(),
  name: "Geoff",
  email: "geoff"+"@gmail.com",
  password: hash,
  role: 1,
  Modules:[]
}
staffList.push(user);
db.users.insert(user);
user =
{
  _id: ObjectId(),
  name: "Mike",
  email: "mike"+"@gmail.com",
  password: hash,
  role: 1,
  Modules:[]
}
staffList.push(user);
db.users.insert(user);
//generates example academic advisor and his module
user =
{
  _id: ObjectId(),
  name: "Jeff",
  email: "jeff"+"@gmail.com",
  password: hash,
  role: 2,
  Modules:[]
}
staffList.push(user);
db.users.insert(user);

let  moduleDetails =
{
  _id: ObjectId(),
  name: "Jeff's Academic Advisor session",
  Tutors:[user._id.toString()]
}
moduleList.push(moduleDetails);
db.modules.insert(moduleDetails);

// generates 6 modules and assigns 2 lectures to them

let  moduleDetails =
{
  _id: ObjectId(),
  name: "Computer Science",
  Tutors:[staffList[0]._id.toString(),staffList[1]._id.toString()]
}
moduleList.push(moduleDetails);
db.modules.insert(moduleDetails);
moduleDetails =
{
  _id: ObjectId(),
  name: "Maths",
  Tutors:[staffList[1]._id.toString(),staffList[2]._id.toString()]
}
moduleList.push(moduleDetails);
db.modules.insert(moduleDetails);
moduleDetails =
{
  _id: ObjectId(),
  name: "Art",
  Tutors:[staffList[0]._id.toString(),staffList[2]._id.toString()]
}
moduleList.push(moduleDetails);
db.modules.insert(moduleDetails);
moduleDetails =
{
  _id: ObjectId(),
  name: "Functional Programming",
  Tutors:[staffList[0]._id.toString(),staffList[1]._id.toString()]
}
moduleList.push(moduleDetails);
db.modules.insert(moduleDetails);
moduleDetails =
{
  _id: ObjectId(),
  name: "Software Design",
  Tutors:[staffList[1]._id.toString(),staffList[2]._id.toString()]
}
moduleList.push(moduleDetails);
db.modules.insert(moduleDetails);
moduleDetails =
{
  _id: ObjectId(),
  name: "Games Design",
  Tutors:[staffList[0]._id.toString(),staffList[2]._id.toString()]
}
moduleList.push(moduleDetails);
db.modules.insert(moduleDetails);
//generates 11 students and assigns them 3 modules




user =
{
  _id: ObjectId(),
  name: "Jack",
  email: "jack"+"@gmail.com",
  password: hash,
  role: 0,
  Modules:[moduleList[0]._id.toString(),moduleList[1]._id.toString(),moduleList[2]._id.toString()]
}
userList.push(user);
db.users.insert(user);
user =
{
  _id: ObjectId(),
  name: "Richard",
  email: "richard"+"@gmail.com",
  password: hash,
  role: 0,
  Modules:[moduleList[0]._id.toString(),moduleList[2]._id.toString(),moduleList[3]._id.toString()]
}
userList.push(user);
db.users.insert(user);
user =
{
  _id: ObjectId(),
  name: "John",
  email: "john"+"@gmail.com",
  password: hash,
  role: 0,
  Modules:[moduleList[0]._id.toString(),moduleList[3]._id.toString(),moduleList[4]._id.toString()]
}
userList.push(user);
db.users.insert(user);
user =
{
  _id: ObjectId(),
  name: "Ben",
  email: "ben"+"@gmail.com",
  password: hash,
  role: 0,
  Modules:[moduleList[0]._id.toString(),moduleList[4]._id.toString(),moduleList[5]._id.toString()]
}
userList.push(user);
db.users.insert(user);
user =
{
  _id: ObjectId(),
  name: "Matt",
  email: "matt"+"@gmail.com",
  password: hash,
  role: 0,
  Modules:[moduleList[0]._id.toString(),moduleList[4]._id.toString(),moduleList[5]._id.toString()]
}
userList.push(user);
db.users.insert(user);
user =
{
  _id: ObjectId(),
  name: "Jacob",
  email: "jacob"+"@gmail.com",
  password: hash,
  role: 0,
  Modules:[moduleList[0]._id.toString(),moduleList[1]._id.toString(),moduleList[5]._id.toString()]
}
userList.push(user);
db.users.insert(user);
user =
{
  _id: ObjectId(),
  name: "Tom",
  email: "tom"+"@gmail.com",
  password: hash,
  role: 0,
  Modules:[moduleList[0]._id.toString(),moduleList[1]._id.toString(),moduleList[2]._id.toString()]
}
userList.push(user);
db.users.insert(user);
user =
{
  _id: ObjectId(),
  name: "Jessica",
  email: "jessica"+"@gmail.com",
  password: hash,
  role: 0,
  Modules:[moduleList[0]._id.toString(),moduleList[2]._id.toString(),moduleList[3]._id.toString()]
}
userList.push(user);
db.users.insert(user);
user =
{
  _id: ObjectId(),
  name: "David",
  email: "david"+"@gmail.com",
  password: hash,
  role: 0,
  Modules:[moduleList[0]._id.toString(),moduleList[3]._id.toString(),moduleList[4]._id.toString()]
}
userList.push(user);
db.users.insert(user);
user =
{
  _id: ObjectId(),
  name: "James",
  email: "james"+"@gmail.com",
  password: hash,
  role: 0,
  Modules:[moduleList[0]._id.toString(),moduleList[4]._id.toString(),moduleList[5]._id.toString()]
}
userList.push(user);
db.users.insert(user);
user =
{
  _id: ObjectId(),
  name: "Rob",
  email: "rob"+"@gmail.com",
  password: hash,
  role: 0,
  Modules:[moduleList[0]._id.toString(),moduleList[4]._id.toString(),moduleList[5]._id.toString()]
}
userList.push(user);
db.users.insert(user);
//generates the attendance reports for each student and inserts but the attendance
//report and the user into there respective database

for (x =0; x< userList.length; x++){
  for (y =0; y< moduleList.length; y++){
    let  attendance =
    {
      moduleID:moduleList[y]._id.toString(),
      userID:userList[x]._id.toString(),
      attendance:[
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        false,
        false,
        false,
        true,
      ]
    }
    db.attendances.insert(attendance);
  }
}

//generates 2 admin users
for (admin_id =0; admin_id< 2; admin_id++){
  let  user =
  {
    _id: ObjectId(),
    name: "admin"+admin_id,
    email: "admin"+ admin_id +"@gmail.com",
    password: hash,
    role: 4,
    Modules:[]
  }
  db.users.insert(user);
}
