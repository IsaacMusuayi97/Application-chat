const messageModel = require('../models/messageModel')

const addMessage = async(req, res) => {
    const {userId, chatId, text} = req.body
    const message = new messageModel ( {
        userId: req.body.userId.trim(),
        chatId: req.body.chatId.trim(),
        text: req.body.text
    })
message.save()
   .then((data)=> {
    res.status(200).json({
        succes: "true",
        message: data
    })
   })
   .catch((err => res.status(400).json({ err })))
}

// const registerUser = async (req, res) => {
//     bcrypt.hash(req.body.password, 10)
//         .then(hash => {
//             const { name, email, password } = req.body
//             const user = new User({
//                 name: req.body.name,
//                 email: req.body.email,
//                 password: hash
//             })
//             user.save()
//                 .then((data) => {
//                     res.status(200).json({
//                         succes: "true",
//                         user: data
//                     })
//                 })
//                 .catch((err => res.status(400).json({ err })))

//         })

const getMessage = async(req, res) => {
    const {chatId} = req.params;
    messageModel.find({chatId})
    .then((data)=> {
        res.status(200).send({
            user:data
        })
    }) .catch((error)=>{
        res.status(400).json(error)
    })
}


module.exports = {
    addMessage,
    getMessage
}