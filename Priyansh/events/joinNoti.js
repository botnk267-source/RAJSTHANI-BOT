module.exports.config = {
  name: "joinNoti",
  eventType: ["log:subscribe"],
  version: "1.0.1",
  credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩",
  description: "Notification of bots or people entering groups with random gif/photo/video",
  dependencies: {
      "fs-extra": "",
      "path": "",
      "pidusage": ""
  }
};

module.exports.onLoad = function () {
  const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
  const { join } = global.nodemodule["path"];

  const path = join(__dirname, "cache", "joinvideo");
  if (existsSync(path)) mkdirSync(path, { recursive: true }); 

  const path2 = join(__dirname, "cache", "joinvideo", "randomgif");
  if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

  return;
}


module.exports.run = async function({ api, event }) {
  const { join } = global.nodemodule["path"];
  const { threadID } = event;
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
      api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? " " : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
      const fs = require("fs");
      return api.sendMessage("", event.threadID, () => api.sendMessage({body: `(     𝗛𝗘𝗟𝗟𝗢 𝗘𝗩𝗘𝗥𝗬𝗢𝗡𝗘 𝗠𝗘 𝗔𝗔 𝗚𝗬𝗔. 𝗔𝗔𝗣𝗞𝗔 𝗕𝗢𝗧 𝗡𝗞  \n●»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»●\n\n𝐽𝐴𝐿𝐷𝐼 𝑆𝐼 𝑀𝐸𝑅𝐸. 𝐵𝑂𝑆𝑆 𝐾𝑂 𝑅𝐸𝑄𝑈𝐸𝑆𝑇 𝐵𝐻𝐸𝐽𝑂 👇👇 \n●============================================●\n    〚𝗢𝗪𝗡𝗘𝗥 〛𝑰𝑫 𝑳𝑰𝑵𝑲 👇👇\n\n𝑭𝑨𝑪𝑬𝑩𝑶𝑶𝑲 𝑳𝑰𝑵𝑲 :☞ https://www.facebook.com/profile.php?id=61577417285926 \n\n𝑰𝑵𝑺𝑻𝑨𝑮𝑹𝑨𝑴 𝑳𝑰𝑵𝑲 :☞ https://www.instagram.com/nk_lovely_143_1?igsh=OXY4eDBsbzEzMnVr \n🌹💚✨═════••●●═════🌸🌺═════●●••═════✨💚🌹\n\n𝗽𝗿𝗲𝗳𝗶𝘅 => 👉 .{global.config.PREFIX} 👈\n🌹💚✨═════••●●═════🌸🌺═════●●••═════✨💚🌹\n\n╔═━━━━✦🖤✦━━━━═╗\n\n🔥       𝑵𝑲 𝑩𝑶𝑻     🔥\n\n╚═━━━━✦🖤✦━━━━═╝\n\n『★彡  彡★』\n\n❝ Apni aukaat ko samajhne me logon ki zindagi nikal jaati hai. ❞\n\n👑 Owner: ㅤ𒁍𓆩๛⃝𝑵𝑲𒁍𝑬𝑫𝑰𝑻𝑶𝑹‣᭄𓆪 \n🌹💚✨═════••●●═════🌸🌺═════●●••═════✨💚🌹\n\n𝑊𝑂𝑅𝑁𝐼𝐺:👇👇\n\n𝑩𝑶𝑻 𝑲𝑶 𝑲𝑶𝑰 𝑮𝑨𝑳𝑰 𝑵𝑯𝑰 𝑫𝑬𝑮𝑨 𝑵𝑨 𝑶𝑾𝑵𝑬𝑬 𝑲𝑶 𝑼𝑳𝑻𝑨 𝑺𝑰𝑫𝑯𝑨 𝑩𝑶𝑳𝑬𝑮𝑨 𝑨𝑮𝑨𝑹 𝑨𝑰𝑺𝑨 𝑯𝑼𝑨  𝑻𝑶. 𝑩𝑶𝑻 𝑲𝑨 𝑺𝑨𝑹𝑾𝑨𝑹 𝑶𝑵 𝑯𝑶 𝑱𝑨𝒀𝑮𝑨  𝑫𝑯𝑨𝑵𝒀𝑾𝑨𝑫 💜👈\n🌹💚✨═════••●●═════🌸🌺═════●●••═════✨💚🌹\nबोट अप्रूवल के लिए ${global.config.PREFIX}request लिख के Send कर दो 🙂🖐️) 
`, attachment: fs.createReadStream(__dirname + "/cache/botjoin.mp4")} ,threadID));
  }
  else {
      try {
          const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
          let { threadName, participantIDs } = await api.getThreadInfo(threadID);

          const threadData = global.data.threadData.get(parseInt(threadID)) || {};
          const path = join(__dirname, "cache", "joinvideo");
          const pathGif = join(path, `${threadID}.video`);

          var mentions = [], nameArray = [], memLength = [], i = 0;

          for (id in event.logMessageData.addedParticipants) {
              const userName = event.logMessageData.addedParticipants[id].fullName;
              nameArray.push(userName);
              mentions.push({ tag: userName, id });
              memLength.push(participantIDs.length - i++);
          }
          memLength.sort((a, b) => a - b);

          (typeof threadData.customJoin == "undefined") ? msg = "╔═━━━━✦🖤✦━━━━═╗\n\n🔥    〚 𝑵𝑲 𝐁𝐎𝐓〛 \n\n   🔥╚═━━━━✦🖤✦━━━━═╝\n\n ============================   \n\n 𝑹𝑨𝑴 𝑹𝑨𝑴 𝑱𝑰\n ============================❘\n\n╔═══❖•ೋ° °ೋ•❖═══╗\ n\n {name} \n\n╚═══❖•ೋ° °ೋ•❖═══╝\n\n🅜🅞🅢🅣✿\n\n╰┈➤ 𝑾𝑬𝑳𝑪𝑶𝑴𝑬 ✿╰┈➤\n\n𝑻𝑶 𝑶𝑹 𝑭𝑨𝑴𝑰𝑳𝒀 𝑮𝑹𝑶𝑼𝑷 💜🍁 😘🎉 \n✦•┈┈┈┈┈┈┈┈┈┈ ✿ 🌸 ✿ ┈┈┈┈┈┈┈┈┈┈•✦\n 𝗬𝗢𝗨 𝗔𝗥𝗘 𝗧𝗛𝗘 『 {soThanhVien} 』 𝗠𝗘𝗠𝗕𝗘𝗥 𝗢𝗙    〈✶ {threadName} ✶〉 𝗚𝗥𝗢𝗨𝗣 😇\n🍀🌹💎═─┈╌╌☆╌╌╌┈─═💎🌹🍀\n 🌺𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥 👑➪🦋⃟⃟ ⍣⃝ 𝑵𝑲➺𝑬𝑫𝑰𝑻𝑶𝑹༆𓆪⃟⍨⃝🖤\n🌹●═════🌸🌺═●•═════✨💚\n AGAR  YE RULES. NHI MANE TO APKO GROUP AE NIKALA JA SAKTA HAI  \n🌹●═════🌸🌺═●•═════✨💚\n𝑭𝑶𝑳𝑳𝑶𝑾 𝑮𝑹𝑶𝑼𝑷 𝑹𝑼𝑳𝑬𝑺 & 𝑹𝑬𝑺𝑷𝑬𝑪𝑻 𝒀𝑶𝑼𝑹 𝑺𝑰𝑺𝑻𝑬𝑹 𝑨𝑵𝑫 𝑩𝑹𝑶𝑻𝑯𝑬𝑹 🤗\n🍀🌹💎═─┈┈╌╌╌☆╌╌╌┈┈─═💎🌹🍀\\n 🫡𝗜𝗙 𝗨𝗦𝗘 𝗠𝗘𝗦𝗦𝗘𝗡𝗚𝗘𝗥 𝗖𝗛𝗔𝗧𝗕𝗢𝗧😜𝑶𝑭 𝑼𝑺𝑬 𝑴𝑬𝑺𝑺𝑬𝑵𝑬𝑬 𝑪𝑯𝑨𝑻𝑩𝑶𝑻  \n\n☆》ᗷOƬ ᑭᖇƐFƖ᙭【.】ƬƳᑭƐ ℎƐᒪᑭ /ᗰƐᑎᑌ ƬO ᔕƐƐ ᗩᒪᒪ ᗩᒪᒪ ᑕOᗰᗰᗩᑎᗪ 《☆🌺 \n 🌹💚🌺═════●●••═════✨💚🌹\n\n 𝑲𝑬𝑬𝑷 𝑬𝑵𝑵𝑱𝑶𝒀 𝑨𝑵𝑫 𝑺𝑨𝑹𝑬. 𝑨𝑪𝑻𝑰𝑽𝑬  ☜🐚\n🌹💚🌺═════●●••═════✨💚🌹\n➪🦋⃟⃟ ⍣⃝ 𝗡𝗞➺𝗘𝗗𝗜𝗧𝗢𝗥༆𓆪⃟⍨⃝🖤" : msg = threadData.customJoin;
          msg = msg
          .replace(/\{name}/g, nameArray.join(', '))
          .replace(/\{type}/g, (memLength.length > 1) ?  'Friends' : 'Friend')
          .replace(/\{soThanhVien}/g, memLength.join(', '))
          .replace(/\{threadName}/g, threadName);

          if (existsSync(path)) mkdirSync(path, { recursive: true });

          const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

          if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathvideo), mentions }
          else if (randomPath.length != 0) {
              const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
              formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
          }
          else formPush = { body: msg, mentions }

          return api.sendMessage(formPush, threadID);
      } catch (e) { return console.log(e) };
  }
            }
