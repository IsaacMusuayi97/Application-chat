const ChatModel = require("../models/ChatModel");


const createChat = async (req, res) => {
  
  const chat = await ChatModel.findOne({
    members: { $all: [req.params.firstId, req.params.secondId] },
  });
  const newChat =
    chat ||
    new ChatModel({
      members: [req.params.firstId, req.params.secondId],
    });

  try {
    const result = await newChat.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

const userChats = async (req, res) => {
  ChatModel.find({
    members: { $in: [req.params.userId] },
  })
    .then((chat) => {
      res.status(200).json(chat);
    })
    .catch((error) => res.status(500).json(error));
};

const findChat = async (req, res) => {
  try {
    const chat = await ChatModel.findOne({
      members: { $all: [req.params.firstId, req.params.secondId] },
    });
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createChat,
  userChats,
  findChat,
};
