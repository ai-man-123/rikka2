let handler = async (m, { text }) => {
res = m.quoted ? m.quoted.text : text
if (!res) throw 'Tidak Ada Teks'
a = await m.reply('Please Wait, Your data is being processed...') 
await conn.sendMessage(m.chat, { url: `https://api-rull.herokuapp.com/api/cmd?code=${encodeURIComponent(res)}` }, 'imageMessage', { quoted: m, caption: 'Success...', sendEphemeral: true })
conn.deleteMessage(a.key.remoteJid, a.key)
}
handler.help = ['carbon <code>']
handler.tags = ['tools']
handler.command = /^(carbon)$/i

module.exports = handler