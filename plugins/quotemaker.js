let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

let handler  = async (m, { conn, text }) => {
let d = new Date
  let tgl = d.toLocaleDateString('id-Id')
  let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
 await require('axios').get(`https://terhambar.com/aw/qts/?kata=${encodeURIComponent(text)}&author=${conn.getName(m.sender)}&tipe=aesthetic`)
await conn.sendFile(m.chat, 'https://terhambar.com/aw/qts/result.jpg', 'quotemaker.jpg', 'Maker kamu sudah jadi..\n╰ Follow Me: *instagram.com/caliph91_*', m)
}
handler.help = ['quote'].map(v => v + 'maker (tulisan)')
handler.tags = ['nulis']
handler.command = /^quotemaker$/i
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