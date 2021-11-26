let { dec } = require('../lib/binary')
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Tidak ada teks'
  m.reply(dec(text))
}
handler.help = ['unbinary <teks>']
handler.tags = ['tools']

handler.command = /^(unbinary)$/i

module.exports = handler
