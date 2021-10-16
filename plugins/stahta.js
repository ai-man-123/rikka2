const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
const WSF = require('wa-sticker-formatter')
let handler  = async (m, { conn, args }) => {
    if (!args.join(' ')) throw 'Teksnya?'
const sticker = new WSF.Sticker(`https://api.zeks.xyz/api/hartatahta?apikey=caliph_71&text=${encodeURIComponent(args.join(' '))}` , { animated: false, pack:packname, author})
await sticker.build()
const sticBuffer = await sticker.get()
await conn.sendMessage(m.chat, sticBuffer, 'stickerMessage', { quoted: m })
conn.reply(m.chat, 'Support Saya Kak🙂\ninstagram.com/caliph91_')
}
handler.help = ['stahta (teks)']
handler.tags = ['sticker']
handler.command = /^stahta$/i

module.exports = handler