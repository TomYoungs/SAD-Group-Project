const express = require('express')
const router = express.Router()

//controller functions
const { getModules, getaModule, createModule, deleteModule, updateModule, getModulesByTutor, getaUsersModule } = require('../controllers/moduleController')

const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

router.get('/getmodules', getModules)

router.get('/getamodule/:id', getaModule)

router.get('/getModulesByTutor/:tutor', getModulesByTutor)

router.post('/createmodule', createModule)

router.delete('/deletemodule', deleteModule)

router.patch('/updatemodule', updateModule)

router.get('/getausersmodule/:id', getaUsersModule)


module.exports = router
