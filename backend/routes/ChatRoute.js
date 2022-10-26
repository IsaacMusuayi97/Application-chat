const express = require('express')

const router = express.Router()

const {createChat,  userChats,  findChat} = require('../controllers/ChatController')

router.post("/:firstId/:secondId/", createChat)
router.get("/:userId", userChats)
router.get("/:chatId", findChat)

module.exports = router
