const express = require('express')

const router = express.Router()

const {addMessage, getMessage} = require('../controllers/MessagesController')

router.post('/', addMessage)
router.get('/:chatId', getMessage)

//localhost:3000/api/messages/313123123123123

module.exports = router