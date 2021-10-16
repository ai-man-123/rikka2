let fetch = require('node-fetch')
     let handler  = async (m, { conn, args }) => {
     afi = global.API('caliph', '/couple', null, 'apikey')
    heum = await fetch(afi)
    json = await (await heum.json()).result
   conn.sendMessage(m.chat, { url: json.male }, 'imageMessage', { quoted: m})
   conn.sendMessage(m.chat, { url: json.female }, 'imageMessage', { quoted: m})
}
handler.help = ['ppcouple']
handler.tags = ['wibu']
handler.command = /^(ppcouple)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler