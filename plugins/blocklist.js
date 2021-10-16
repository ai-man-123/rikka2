let handler = async (m, { conn, text }) => {
  listnye = conn.blocklist.map(v => v.replace('c.us', 's.whatsapp.net'))
if (listnye.length == 0) return m.reply('Belum Ada Yang Di Blok 🙂');
  om = '*── 「 HALL OF SHAME 」 ──*\n\n'
  lists = 0
  for (i of listnye) {
  lists += 1
  om += `${lists}. @${i.split('@')[0]}\n`
  }
  conn.sendMessage(m.chat, om, 'conversation', { contextInfo: { mentionedJid: listnye }, quoted: m })
}
handler.help = ['blocklist','listblock']
handler.tags = ['host']
handler.command = /^(listblock|blocklist)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler