const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    userReceiver: {
      type: String,
    },
    chatId: {
      type: String,
    },
    text: {
      type: String,
    },
    imageSent: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Message", messageSchema);
