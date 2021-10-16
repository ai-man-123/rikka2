let handler = async (m, { conn }) => {
  let data = await conn.getAdmins(m.chat)
  let txt = `List Admin :\n\n`
  for (let i of data) {
  txt += `- @${i.jid.split('@')[0]}\n`
  }
  conn.reply(m.chat, txt, m)
}
handler.help = ['admins', 'adminlist']
handler.tags = ['info']
handler.command = /^(admin(s|list))$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler