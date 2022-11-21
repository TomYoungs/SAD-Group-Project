const validator = require("validator");

const { checkPassword, validEmail, checkHashPassword } = require('C:/Users/jamai/source/repos/SAD-Group-Project/test/dummyFunctions.js');

const assert = require('chai').assert;
const sayHello = require('C:/Users/jamai/source/repos/SAD-Group-Project/test/dummyFunctions.js').checkPassword;

describe('App', function(){
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
