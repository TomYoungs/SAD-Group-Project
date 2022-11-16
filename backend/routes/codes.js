const express = require('express')
const router = express.Router()

//controller functions
const { getallCodes, getaCode } = require('../controllers/codesController')

router.get('/getallcodes', getallCodes)

router.post('/getacode', getaCode)

module.exports = router