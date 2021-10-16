let fetch = require('node-fetch')
     let handler  = async (m, { conn, args }) => {
    heum = await require('node-fetch')('https://raw.githubusercontent.com/Caliph71/txt/main/shota.json').then(v => v.json())
   conn.sendFile(m.chat, heum[Math.floor(Math.random() * heum.length)], 'Server Error!', 'Neh', m, false)
}
handler.help = ['shota']
handler.tags = ['wibu']
handler.command = /^shota$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler