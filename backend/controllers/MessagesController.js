const messageModel = require("../models/messageModel");

const addMessage = async (req, res) => {
  const { userId, userReceiver, chatId, text, imageSent } = req.body;
  const message = new messageModel({
    userId: req.body.userId.trim(),
    userReceiver: req.body.userReceiver,
    chatId: req.body.chatId.trim(),
    text: req.body.text,
    imageSent: req.body.imageSent ? req.body.imageSent : "",
  });
  message
    .save()
    .then((data) => {
      res.status(200).json({
        succes: "true",
        message: data,
      });
    })
    .catch((err) => res.status(400).json({ err }));
};

const getMessage = async (req, res) => {
  const { chatId } = req.params;
  messageModel
    .find({ chatId })
    .then((data) => {
      res.status(200).send({
        user: data,
      });
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

module.exports = {
  addMessage,
  getMessage,
};
