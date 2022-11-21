const express = require('express')
const router = express.Router()

//controller functions
const { getModules, getaModule, createModule, deleteModule, updateModule, getaUsersModule } = require('../controllers/moduleController')

router.get('/getmodules', getModules)

router.get('/getamodule/:id', getaModule)

router.post('/createmodule', createModule)

router.delete('/deletemodule', deleteModule)

router.patch('/updatemodule', updateModule)

router.get('/getausersmodule/:id', getaUsersModule)


module.exports = router