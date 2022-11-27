const express = require('express')
const router = express.Router()

//controller functions
const { getAllModules, getModulesById, createModule, deleteModule, updateModule, getModulesByTutor, getaUsersModule } = require('../controllers/moduleController')


router.get('/getallmodules', getAllModules)

router.get('/getbyid/:id', getModulesById)

router.get('/getbytutor/:tutor', getModulesByTutor)

router.post('/createmodule', createModule)

router.delete('/deletemodule', deleteModule)

router.patch('/updatemodule', updateModule)

router.get('/getbyuser/:id', getaUsersModule)


module.exports = router
