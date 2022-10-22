const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMe, getAll } = require('../controllers/userController')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/:id', getMe)
router.get('/', getAll)

module.exports = router