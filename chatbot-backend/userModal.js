mongoose = require("mongoose")
const chatSchema = new mongoose.Schema({
    botName: String,
    chatColor : String,
    botProfile: String,
    customPhoto: String,
    greetingMessage:String,
    createdAt: { type: Date, default: Date.now },
  });
  module.exports = mongoose.model("Chat",chatSchema)
 