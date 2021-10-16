let axios = require('axios')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  m.reply('Tunggu Bentar...')
  var api = global.API('lol', '/api/soundcloud', { url: args.join(' ') }, 'apikey')
  let { data } = await axios.get(api)
  let { title, link } = data.result
  conn.sendMessage(m.chat, { url: link }, 'audioMessage', { quoted: m, mimetype: 'audio/mpeg' })
}
handler.help = ['scdl', 'soundcloud'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = ['scdl', 'soundcloud']
handler.limit = true
module.exports = handler