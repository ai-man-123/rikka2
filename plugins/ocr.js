const fs = require('fs').promises
let { recognize } = require('../lib/ocr')

 let handler  = async (m, { conn }) => {
  let q = m.quoted ? m.quoted : m
let content = m.quoted ? JSON.parse(JSON.stringify(m).replace(/quotedM/gi, 'm')).message.extendedTextMessage.contextInfo : m
      let img = /imageMessage/.test(q.mtype) 
      if (!img) throw 'Reply/Kirim Foto Dengan Caption *#ocr*'
      try {
      media = await conn.downloadAndSaveMediaMessage(content)
     su = await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
      m.reply(`${su}`)
      await fs.unlink(media)
      } catch (e) {
      m.reply(`${e}`)
     }
}
handler.help = ['ocr']
handler.tags = ['tools']
handler.command = /^(ocr)$/i
handler.limit = true
handler.fail = null

module.exports = handler