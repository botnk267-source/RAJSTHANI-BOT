module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "NK EDITOR BOT",
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://i.ibb.co/DDkk6qCv/IMG-20250804-WA0735.jpg"];
var callback = () => api.sendMessage({body:`
╔════◇🌀◇════╗
   💎 𝐁𝐎𝐓 ＩＮＦＯ 💎
╚════◇🌀◇════╝

🤖 𝘽𝙤𝙩 𝙉𝙖𝙢𝙚 ➤ ${global.config.BOTNAME} ⚡
👑 𝙊𝙬𝙣𝙚𝙧 ➤ 𝑵𝑲 𝑬𝑫𝑰𝑻𝑶𝑹 👑🔥
🎭 𝘼𝙠𝙖 ➤ 𝕋𝕙𝕖 𝕂𝕚𝕟𝕘 𝕆𝕗 𝔹𝕠𝕥𝕤 ✨

╭━━━━━━━✦✗✦━━━━━━━╮
🌐 𝐒𝐎𝐂𝐈𝐀𝐋 𝐌𝐄𝐃𝐈𝐀 🔗
╰━━━━━━━✦✗✦━━━━━━━╯
📘 Facebook ➤  https://www.facebook.com/share/1MhzLsBVRY/
📸 Instagram ➤ https://www.instagram.com/nk_lovely_143_1?igsh=OXY4eDBsbzEzMnVr
📡 Telegram ➤ t.me/NK2650

╭━━━━━━━✦✗✦━━━━━━━╮
📅 𝐓𝐨𝐝𝐚𝐲 ➤ ${juswa}  
⏳ 𝐔𝐩𝐭𝐢𝐦𝐞 ➤ ${hours}:${minutes}:${seconds}  
╰━━━━━━━✦✗✦━━━━━━━╯

💠 𝐏𝐑𝐄𝐅𝐈𝐗 ➤ ${global.config.PREFIX}  
⚡ 𝐒𝐓𝐀𝐓𝐔𝐒 ➤ ✅ RUNNING WITHOUT LIMITS 🚀🔥

🎀 Thanks For Using ${global.config.BOTNAME} 🎀

`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
   
