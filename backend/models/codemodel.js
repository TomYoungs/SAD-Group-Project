const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//lines 10-12 used as example. Taken from https://tecadmin.net/get-current-date-time-javascript/
const hoursBeforeDeletion = 2
var today = new Date();
var deletionHour = ((today.getHours() + hoursBeforeDeletion < 24) ? deletionHour = (today.getHours() + hoursBeforeDeletion) : console.error("ERROR"))
const month = today.toLocaleString('default', { month: 'long' });
// const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// const expireTime = today.getHours()+2 + ":" + today.getMinutes() + ":" + today.getSeconds();
// var dateTime = date +' '+ expireTime;



//getDate() returns day number in month. getDay() returns day of the week. getDate() should be used
const expireTime = month + " " + today.getDate() + ", " + today.getFullYear() + " " + (today.getHours() + hoursBeforeDeletion) + ":" + today.getMinutes() + ":" + today.getSeconds();

const codesSchema = new Schema({
  codeID: {
    type: String,
    required: true,
  },
  moduleID: {
    type: String,
    required: true,
  },
  weekID: {
    type: Number,
    required: true,
  },
  expires: {
    type: Date,
    default: new Date(expireTime),
  }// <Month Day, Year Hour Minute Second> format
});



module.exports = mongoose.model("Codes", codesSchema);

