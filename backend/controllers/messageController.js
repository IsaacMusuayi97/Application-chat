const asyncHandler = require('express-async-handler')

const receiveMessages = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Receive messages'})
})

const sendMessages =  asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Send messages'})
})

const updateMessages = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update messages ${req.params.id}`})
})

const deleteMessages = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete messages ${req.params.id}`})
})

module.exports = {
    receiveMessages,
    sendMessages,
    updateMessages,
    deleteMessages
}