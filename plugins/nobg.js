const f = require('node-fetch')
const { MessageType } = require('@adiwajshing/baileys')
let { webp2png } = require('../lib/webp2mp4')
let uploadFile = require('../lib/uploadFile2')
let handler = async (m, { conn, usedPrefix: _p }) => {
    let result = ''
     let q = m.quoted ? m.quoted : m
     if (!/image|sticker/.test(q.mtype)) throw `Kirim/Reply Gambar Dengan Perintah ${_p}nobg`
     m.reply('Tunggu Sebentar..')
     let buffer = await q.download()
     if (/sticker/.test(q.mtype)) {
     result = await webp2png(buffer)
     } else {
     result = (await uploadFile(buffer)).url
     }
     api = global.API('vh', '/removebgwithurl', { link: result }, 'apikey')
     fet = await f(api)
     if (fet.status != 200) throw await fet.text()
     let json = await fet.json()
     let { image } = json.result
     conn.sendMessage(m.chat, { url: image }, 'imageMessage', { quoted: m, caption: 'Jangan Lupa Follow https://instagram.com/caliph91_ ya kak!' })
}
handler.help = ['nobg (reply)']
handler.tags = ['tools']
handler.command = /^nobg$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler