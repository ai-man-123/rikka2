let handler  = async (m, { conn, text }) => {
   let [namagc, partici] = text.split('|')
   if (!partici) partici = `@${m.sender.split('@')[0]}`
   if (!namagc) namagc = text
   if (!namagc) throw 'Format Salah!!!'
   ha = await conn.groupCreate(namagc, conn.parseMention(partici))
   m.reply(`Group Berhasil Dibuat\nLink : https://chat.whatsapp.com/${await conn.groupInviteCode(ha.gid)}`)
  }
handler.help = ['buatgc']
handler.tags = ['owner']
handler.command = /^(buatgc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.fail = null

module.exports = handler
