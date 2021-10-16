let get = require('../lib/tiktok')
let { toAudio } = require('../lib/converter')

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
    m.reply('Scraping....')
   let { nowatermark } = (await get(args[0])).result
   if (nowatermark == undefined) throw `Ups, Maybe Link Invalid!`
   baper = await getBuffer(nowatermark)
   audio = await toAudio(baper, 'mp3')
   conn.sendMessage(m.chat, audio, 'audioMessage', { quoted: m, mimetype: 'audio/mpeg' })
}
handler.help = ['tiktokaudio', 'ttaudio'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ttaudio|tiktokaudio)$/i

module.exports = handler