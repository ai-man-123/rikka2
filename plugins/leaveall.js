let handler  = async (m, { conn }) => {
   chats = conn.chats.array.filter(v => v.jid.endsWith('g.us')).map(v => v.jid)
  for (let i of chats) {
  await conn.reply(i, `Maaf, Bot sedang pembersihan\nTotal Chat Aktif : ${chats.length}`)
  await conn.groupLeave(i).catch(() => {})
  await conn.modifyChat(i, 'delete').catch(() => {})
 }
  }
handler.help = ['leaveall']
handler.tags = ['owner']
handler.command = /^(leaveall)$/i
handler.rowner = true
handler.mods = false
handler.premium = false
handler.private = false

handler.admin = false
handler.botAdmin = false

//handler.fail = null

module.exports = handler
