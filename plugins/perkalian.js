let handler  = async (m, { conn, text, usedPrefix }) => {
   if (!text) throw `Contoh penggunaan\n${usedPrefix}kali 10×10`
   let [kali1, kali2] = text.split('×')
   perkalian = require('rumus-bdr').rdb.perkalian(kali1, kali2)
  m.reply(perkalian)
  }
handler.help = ['kali']
handler.tags = ['edu']
handler.command = /^(kali)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.fail = null

module.exports = handler