const validator = require("validator");

const { checkPassword, validEmail } = require('C:/Users/jamai/source/repos/SAD-Group-Project/test/dummyFunctions.js');

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
})
