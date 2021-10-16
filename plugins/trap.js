let fetch = require('nekos.life')
let nekos = new fetch()
let handler = async (m, { conn, text, command }) => {
if (!DATABASE.data.chats[m.chat].nsfw && m.isGroup) throw 'Feature Nsfw Disable\nType *!enable* *nsfw* to activate this feature'
  m.reply(`_*Tunggu permintaan anda sedang diproses...*_`)
  conn.sendMessage(m.chat, await nekos.nsfw.trap(), 'imageMessage', { quoted: m, caption: 'Huu sange sama kartun....' })
}
handler.command = /^(trap)$/i
handler.tags = ['sange']
handler.help = ['trap']
handler.limit = true

module.exports = handler
;handler.disable = false
;handler.disable = true
;