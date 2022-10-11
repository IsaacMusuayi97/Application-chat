const express = require('express')
const router = express.Router()
const {receiveMessages, sendMessages, updateMessages, deleteMessages} = require('../controllers/messageController')

router.route('/').get(receiveMessages).post(sendMessages)
router.route('/:id').delete(deleteMessages).put(updateMessages)

module.exports = router