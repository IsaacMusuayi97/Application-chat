const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMe, getAll, handleSignIn } = require('../controllers/userController')

router.post('/', registerUser)
router.post('/login', loginUser)
router.post('/auth', handleSignIn)

router.get('/:id', getAll)


module.exports = router