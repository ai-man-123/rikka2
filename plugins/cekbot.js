let handler  = async (m, { conn, participants}) => {
  fil = participants.filter(v => v.vname || v.notify).filter(v => (v.notify || v.vname).toLowerCase().includes('bot'))
  conn.sendMessage(m.chat, `「 List Bot 」` + `\n\n` + fil.map(v => '- @' + v.jid.replace(/@.+/, '')).join`\n`, 'conversation', { quoted: m, contextInfo : { mentionedJid: fil.map(v => v.jid) }})
}
handler.help = ['cekbot']
handler.tags = ['group']
handler.command = /^(cekbot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
