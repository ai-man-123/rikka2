let fetch = require('node-fetch')
     let handler  = async (m, { conn, args, text }) => {
     if (!text) throw 'Cari Apa ?'
 if (text) m.reply('Searching.....')
    heum = await require('../lib/scraper').pinterest(text)
    json = await heum
    random = json.result[Math.floor(Math.random() * json.result.length)]
    if (json.result.length == 0) return conn.sendFile(m.chat, './src/error.png', 'error not found', 'Error 404 not found', m)
   conn.sendMessage(m.chat, { url: random }, 'imageMessage', { quoted: m, caption: `Hasil Pencarian : ${text}` })
}
handler.help = ['pinterest <query>']
handler.tags = ['tools']
handler.command = /^pinterest$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
