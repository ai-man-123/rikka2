let fetch = require('akaneko')
let handler = async (m, { conn, text }) => {
if (!DATABASE.data.chats[m.chat].nsfw && m.isGroup) throw 'Feature Nsfw Disable\nType *!enable* *nsfw* to activate this feature'
  let url = await fetch.nsfw.hentai()
  conn.sendMessage(m.chat, { url }, 'imageMessage', { quoted: m })
}
handler.command = /^hentai$/i
handler.tags = ['sange']
handler.help = ['hentai']
handler.limit = true

module.exports = handler
;handler.disable = false
;handler.disable = true
;