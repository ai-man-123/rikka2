let vas = require('canvacord')
let handler = async (m, { text, conn }) => {
if (!text) throw 'Teksnya?'
m.reply(`*_Tunggu permintaan anda sedang diproses...._*`)
vas.Canvas.clyde(text).then(v => {
conn.sendMessage(m.chat, v, 'imageMessage', { quoted: m, caption: 'Sukses...' })
})
}
handler.help = ['clyde <teks>']
handler.tags = ['fun']
handler.command = /^(clyde)$/i

module.exports = handler