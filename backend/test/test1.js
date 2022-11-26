import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils"

const validator = require("validator");
const Codes = require("../models/codemodel");

const { checkPassword, validEmail, checkHashPassword, getCode } = require('./dummyFunctions.js');

const assert = require('chai').assert;
const sayHello = require('./dummyFunctions.js').checkPassword;

describe('User Tests', function(){
    it('app should return true', function(){
        let result = checkPassword();
        assert.equal(result, true);
    })
    it('app should return true if email is valid', function(){
        let result = validEmail();
        assert.equal(result, true);
    })
    it('app should return true if the hashed password matches', function(){
        let hashed = "$2b$10$IYCw7eb.xdg5F8Qgt/ifBe5LLL99Kdi48PxDlkVo706Ufm2lUz79m";
        let result = checkHashPassword();
        assert.equal(hashed, result);
    })
})
describe('Attendance Tests', function(){
    it('app should find answer', async()=>{
        const codes = await Codes.find({}).sort({ createdAt: -1 });
        codes.should.have.status(200);
    })
})
describe('User Interactions', ()=>{
    it('bs test', ()=>{
        act(() =>{
            ReactDOM.render()
        })
    })
})
