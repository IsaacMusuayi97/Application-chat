const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMe, getAll, handleSignIn } = require('../controllers/userController')

router.post('/', registerUser)
router.post('/login', loginUser)
router.post('/auth', handleSignIn)
// router.get('/:id', getMe)
router.get('/:id', getAll)
// router.get('/:userId', getAll)

module.exports = router