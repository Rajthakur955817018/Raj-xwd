const fs = require("fs");
module.exports.config = {
  name: "tea",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "tea",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("tea")==0 || event.body.indexOf("Tea")==0 || event.body.indexOf("Cha")==0 || event.body.indexOf("চা")==0) {
    var msg = {
        body: "𝙍𝘼𝙅 𝙓𝙒𝘿 𝙆𝙀 𝙂𝙃𝘼𝙍 𝙆𝙄 𝘾𝙃𝘼𝙄 𝙊𝙄𝙇𝙊 𝙂𝘼𝙍𝘼𝙈 𝙂𝘼𝙍𝘼𝙈 𝘽𝙃𝘼𝘼𝙇𝙐 𝙆𝙀 𝘿𝙊𝙊𝘿𝙃 𝙆𝙄 😾☕",
        attachment: fs.createReadStream(__dirname + `/noprefix/tea.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🫖", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
