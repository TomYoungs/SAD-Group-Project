const express = require('express')
const router = express.Router()

//controller functions
const { getallCodes, getaCode, createaCode } = require('../controllers/codesController')

router.get('/getallcodes', getallCodes)

router.get('/getacode', getaCode)

router.post('/createacode', createaCode)

module.exports = router