let { getBuffer } = require('../lib/functions')
let handler = async (m, { conn, args }) => {
  let group = m.chat
  if (/^[0-9]{5,16}-[0-9]+@g\.us$/.test(args[0])) group = args[0]
  if (!/^[0-9]{5,16}-[0-9]+@g\.us$/.test(group)) throw 'Hanya bisa dibuka di grup'
  let groupMetadata = await conn.groupMetadata(group)
  if (!groupMetadata) throw 'groupMetadata is undefined :\\'
  if (!'participants' in groupMetadata) throw 'participants is not defined :('
  let me = groupMetadata.participants.find(user => user.jid === conn.user.jid)
  if (!me) throw 'Aku tidak ada di grup itu :('
  if (me.isAdmin !== true) throw 'Aku bukan admin T_T'
  conn.reply(m.chat, `Nih kak link grup *${groupMetadata.subject}*\n\n_Teruskan pesan ini untuk mendapatkan link grup_`, m, { contextInfo: { externalAdReply : {
  title: groupMetadata.subject,
  thumbnail: await getBuffer(await conn.getProfilePicture(m.chat)),
  sourceUrl: 'https://chat.whatsapp.com/'+await conn.groupInviteCode(m.chat)
  }}})
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^link(gro?up)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler