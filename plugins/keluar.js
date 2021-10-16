let handler  = async (m, { conn }) => {
   await m.reply('Sayonara👋')
   conn.groupLeave(m.chat)
  }
handler.help = ['keluar']
handler.tags = ['owner']
handler.command = /^(keluar)$/i
handler.owner = true
handler.group = true
handler.mods = false
handler.premium = false
handler.private = false

handler.admin = false
handler.botAdmin = false

//handler.fail = null

module.exports = handler