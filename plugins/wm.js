const { MessageType } = require('@adiwajshing/baileys')
const { addExif } = require('../lib/sticker')
let handler = async (m, { conn, text }) => {
    let [packname, ...author] = text.split('|')
    author = (author || []).join('|')
    let mime = (m.quoted ? m.quoted.mimetype : '')
    if (!/webp/.test(mime)) throw 'Reply sticker!'
    let img = await m.quoted.download()
    stiker = await addExif(img, packname || '', author || '')
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^wm$/i

module.exports = handler
