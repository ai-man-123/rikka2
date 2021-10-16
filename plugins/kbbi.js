let handler = async (m, { conn, text }) => {
  if (!text) throw 'Contoh penggunaan\n#kbbi hai'
  let { lema, arti } = await require('../lib/kbbi')(text)
  m.reply(`${lema}\n\n${arti.join(', ')}`)
}
handler.help = ['kbbi <kata>']
handler.tags = ['internet']

handler.command = /^(kbbi)$/i

module.exports = handler