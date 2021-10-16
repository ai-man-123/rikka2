const { exec } = require('child_process')
const fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {
  if (!global.support.ffmpeg) {
       if (!m.quoted) return conn.reply(m.chat, 'Tag stikernya!', m)
       let q = { message: { [m.quoted.mtype]: m.quoted } }
  if (!/sticker/.test(m.quoted.mtype)) return m.reply('Tag stikernya!')
    let sticker = await conn.downloadM(q)
    if (!sticker) throw sticker
    let result = await require('../lib/webp2mp4').webp2png(sticker)
    conn.sendMessage(m.chat, { url: result }, MessageType.image, { quoted: m, caption: 'Nih kak'})
    } else {
     if (!m.quoted) return conn.reply(m.chat, 'Tag stikernya!', m)
       let q = { message: { [m.quoted.mtype]: m.quoted } }
  if (!/sticker/.test(m.quoted.mtype)) return m.reply('Tag stikernya!')
  let media = await conn.downloadAndSaveMediaMessage(q)
  exec(`ffmpeg -i ${media} ${m.sender+'.png'}`, async (err) => {
  if (err) return m.reply(err.toString())
  conn.sendMessage(m.chat, fs.readFileSync(m.sender+'.png'), 'imageMessage', { quoted: m, caption: '```sticker to image```' })
  if (fs.existsSync(m.sender+'.png')) fs.unlinkSync(m.sender+'.png')
  })
  }
}
handler.help = ['toimg (reply)']
handler.tags = ['sticker']
handler.command = /^toimg$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler