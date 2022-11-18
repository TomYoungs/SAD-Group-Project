const express = require('express')
const router = express.Router()

//controller functions
const { getModules, getaModule, createModule, deleteModule, updateModule, getModulesByTutor } = require('../controllers/moduleController')

router.get('/getmodules', getModules)

router.get('/getamodule', getaModule)

router.get('/getModulesByTutor/:tutor', getModulesByTutor)

router.post('/createmodule', createModule)

router.delete('/deletemodule', deleteModule)

router.patch('/updatemodule', updateModule)


module.exports = router
