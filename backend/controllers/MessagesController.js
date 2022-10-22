const messageModel = require('../models/messageModel')

const addMessage = async(req, res) => {
    const {userId, chatId, text} = req.body
    const message = new messageModel ( {
        userId,
        chatId,
        text,
    });
    try {
        const result = await message.save();
        res.status(200).json(result);
    }
    catch(error) {
        res.status(500).json(error)
    }
}

const getMessage = async(req, res) => {
    const {chatId} = req.params;

    try{
        const result = await messageModel.find({chatId});
        res.status(200).json(result);
    }
    catch(error) {
        res.status(500).json(error);
    }
}
module.exports = {
    addMessage,
    getMessage
}