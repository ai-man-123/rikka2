let handler = m => m

handler.before = async function (m, { conn, isAdmin, isBotAdmin }) {
if (m.key.fromMe) return 
if (m.isBaileys) return 
if (!m.isGroup) return
  if (m.mentionedJid.includes(conn.user.jid)) {
conn.sendFile(m.chat, './src/tag.webp', 'apsi tag tag', '', m)
   } else if (m.text.toLowerCase() == 'p') {
    m.reply('Utamakan Salam Kak') 
   } else if (m.text.toLowerCase().includes('assalamualaikum')) {
     m.reply('Waalaikumsalam')
}
  return true
}

module.exports = handler
