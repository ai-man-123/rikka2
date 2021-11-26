let { enc } = require('../lib/binary')
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Tidak ada teks'
  m.reply(enc(text))
}
handler.help = ['binary <teks>']
handler.tags = ['tools']

handler.command = /^(binary)$/i

module.exports = handler
