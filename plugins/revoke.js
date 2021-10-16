let handler = async (m, { conn, args, usedPrefix }) => {
  let res = await conn.revokeInvite(m.chat)
  m.reply('Link Group Berhasil Direset!')
}
handler.help = ['revoke']
handler.tags = ['group']
handler.command = /^re(voke|new)(invite|link)?$/i
handler.group = true

handler.admin = true
handler.botAdmin = true

module.exports = handler
