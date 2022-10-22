const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({

    userId: {
        type: String
    },
    chatId: {
        type: String
    },
    text: {
        type: String,
    },
},
{
    timestamps: true,
}
);

module.exports = mongoose.model('Message', messageSchema)