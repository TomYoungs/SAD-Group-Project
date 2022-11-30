const express = require('express')
const router = express.Router()

//controller functions
const { getAllModules, getModulesById, createModule, deleteModule, updateModule, getModulesByTutor, getAUsersModule } = require('../controllers/moduleController')

const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

router.get('/getallmodules', getAllModules)

router.get('/getbyid/:id', getModulesById)

router.get('/getbytutor/:tutor', getModulesByTutor)

router.post('/createmodule', createModule)

router.delete('/deletemodule', deleteModule)

router.patch('/updatemodule', updateModule)

router.get('/getbyuser/:id', getAUsersModule)


module.exports = router
