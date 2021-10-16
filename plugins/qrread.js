const uploadImage = require('../lib/uploadImage') 
let fetch = require('node-fetch')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
//  let [teks, teks2] = text.split('|')
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw '```Reply / Kirim Qr Yang Ingin Di Scan Dengan Caption``` *#qrread*'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `\`\`\`Reply / Kirim Qr Yang Ingin Di Scan Dengan Caption\`\`\` *#qrread*`
  let img = await q.download()
  let url = await uploadImage(img)
  fetcher = await fetch(`https://recoders-area.caliph.repl.co/api/qrread?url=${url}`)
  m.reply(JSON.stringify(await fetcher.json(), null, 2))
}
handler.help = ['qrread']
handler.tags = ['tools']
handler.command = /^qrread$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.limit = true
handler.fail = null

module.exports = handler