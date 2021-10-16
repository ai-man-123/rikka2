let gempa = require('../lib/infogempa')
let handler = async (m, { conn }) => {
m.reply('Mohon tunggu sebentar~')
let { tanggal, jam, lintang, bujur, magnitude, kedalaman, potensi, wilayah, image } = (await gempa()).result
let result = `
*「 Info Gempa 」*

~> Tanggal : ${tanggal}
~> Jam : ${jam}
~> Lintang : ${lintang}
~> Bujur : ${bujur}
~> magnitude : ${magnitude}
~> Kedalaman : ${kedalaman}
~> Potensi : ${potensi}
~> Wilayah : ${wilayah}
`
conn.sendMessage(m.chat, { url: image }, 'imageMessage', { quoted: m, caption: result })
}
handler.help = ['infogempa']
handler.tags = ['internet']
handler.command = /^infogempa$/i
module.exports = handler