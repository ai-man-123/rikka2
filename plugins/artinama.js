let handler = async (m, { conn, text }) => {
  if (!text) throw 'Contoh penggunaan\n#artinama caliph'
  m.reply((await require('../lib/artinama')(text)).result.replace('ARTI NAMA', '').trim())
}
handler.help = ['artinama <namamu>']
handler.tags = ['primbon']

handler.command = /^(artinama)$/i

module.exports = handler