let fetch = require('node-fetch')
     let handler  = async (m, { conn, args }) => {
conn.sendMessage(m.chat, { url: 'https://rikka-api.herokuapp.com/sagiri?apikey=rikkabotz' }, 'imageMessage', { quoted: m, caption: 'Wangy Wangy', thumbnail: Buffer.alloc(0) })
}
handler.help = ['sagiri']
handler.tags = ['wibu']
handler.command = /^sagiri$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler