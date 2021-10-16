let fetch = require('node-fetch')


let handler  = async (m, { conn }) => {
m.reply('_*Tunggu permintaan anda sedang diproses..._*')
anpi = global.API('lol', '/api/random/quotesnime', {}, 'apikey')
  ddd = await fetch(anpi)
  f = await ddd.json()
  result = global.API('lol', '/api/quotemaker2', { text: f.result.quote, author: f.result.character }, 'apikey')
  conn.sendMessage(m.chat, { url: result }, 'imageMessage', { quoted: m, caption: `*_${f.result.quote}_*\n\n${f.result.character}\n\n${f.result.anime}\n${f.result.episode}` })
}
handler.help = ['quotesnime', 'quotesanime']
handler.tags = ['quotes']
handler.command = /^quotes(anime|nime)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler