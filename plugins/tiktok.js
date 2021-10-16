let { getVideoMeta } = require('tiktok-scraper')
let moment = require('moment-timezone')
let handler = async (m, { conn, args, isPrems }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  m.reply('Downloading....')
  let { nowatermark, watermark, audio } = (await require('../lib/tiktok')(args[0])).result
     try {
  let { diggCount, text, playCount, commentCount, shareCount, createTime, authorMeta } = (await getVideoMeta(args[0])).collector[0]
  let { name, nickName } = authorMeta
  m.reply('Uploading....')
  let caption = (`「  𝐓𝐈𝐊𝐓𝐎𝐊 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 」

- Name : ${nickName}
- Username : ${name}
- Likes : ${diggCount} Likes
- Viewers : ${playCount} Viewers
- Comment : ${commentCount} comment
- Share : ${shareCount}
- Upload At : ${moment(createTime * 1000).tz('Asia/Jakarta').format('HH/MM/YYYY hh:mm:ss')}
- Caption : ${text}
`.trim())
  
 conn.sendMessage(m.chat, await getBuffer(nowatermark), 'videoMessage', { quoted: m, caption })
} catch (e) {
    m.reply('Uploading....')
    conn.sendMessage(m.chat, await getBuffer(nowatermark), 'videoMessage', { quoted: m, caption: 'Jika Ingin Hasilnya Menjadi Audio, Silahkan Reply Video Ini dengan perintah #tomp3' })
}
 
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok(dl)?)$/i

module.exports = handler

async function getBuffer(url) {
lets = await require('node-fetch')(url)
bus = await lets.buffer()
return bus
}