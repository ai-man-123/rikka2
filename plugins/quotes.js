let fetch = require('node-fetch')


let handler  = async (m, { conn }) => {
  ddd = await fetch('https://recoders-area.caliph.repl.co/api/randomquote')
  f = await ddd.json()
  result = global.API('lol', '/api/quotemaker2', { text: f.quote.quotes, author: f.quote.author }, 'apikey')
  conn.sendMessage(m.chat, { url: result }, 'imageMessage', { quoted: m, caption: `*${f.quote.author}*\n\n\n${f.quote.quotes}` })
}
handler.help = ['quotes']
handler.tags = ['quotes']
handler.command = /^(quotes)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler