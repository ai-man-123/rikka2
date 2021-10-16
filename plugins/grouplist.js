let moment = require('moment-timezone')
let handler = async (m, { conn }) => {
  let txt = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.metadata).map(v =>`Nama Grup : ${v.metadata.subject}\nID Grup : ${v.jid}\nDibuat : ${moment(`${v.metadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\nTotal Member : ${v.metadata.participants.length} Members\nOwner grup : @${v.jid.split('-')[0]}`).join`\n\n`
  conn.reply(m.chat, 'List Groups:\n\n' + txt, m)
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(group(s|list))$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler