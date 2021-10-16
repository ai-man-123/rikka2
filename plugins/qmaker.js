let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

let handler  = async (m, { conn, text }) => {
let [quote, authora, theme] = text.split('|')
  if (!quote) throw 'Teks Tidak Boleh Kosong!'
  if (!authora) throw 'Author Tidak Boleh Kosong!'
 await require('axios').get(`https://terhambar.com/aw/qts/?kata=${encodeURIComponent(quote)}&author=${authora}&tipe=${theme ? theme : 'aesthetic'}`)
await conn.sendFile(m.chat, 'https://terhambar.com/aw/qts/result.jpg', 'quotemaker.jpg', 'Maker kamu sudah jadi..\n╰ Follow Me: *instagram.com/caliph91_*', m)
}
handler.help = ['q'].map(v => v + 'maker (tulisan|author|theme)')
handler.tags = ['nulis']
handler.command = /^qmaker$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.register = true

module.exports = handler