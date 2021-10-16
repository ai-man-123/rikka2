let handler = async (m, { conn, text, command }) => {
  if (!text) throw `Contoh penggunaan\n#${command} nama1&nama2`
  if (!text.includes('&')) throw `Contoh penggunaan\n#${command} nama1&nama2`
  var [nama1, nama2] = text.split('&')
  if (!nama1) throw `Nama 1 Tidak boleh kosong!`
  if (!nama2) throw `Nama 2 Tidak boleh kosong!`
  var result = await require('../lib/jodoh')(nama1, nama2)
  var caption = `Nama kamu : ${nama1.charAt(0).toUpperCase() + nama1.slice(1)}
  Nama Jodoh : ${nama2.charAt(0).toUpperCase() + nama2.slice(1)}\nPositif : ${result.positif}\nNegatif : ${result.negatif}
  `.trim()
  conn.sendMessage(m.chat, { url: result.thumbnail }, 'imageMessage', { fileLength: 999999999999999999999999, caption, quoted: m })
}
handler.help = ['pasangan', 'jodoh'].map(a => 'ramal' + a + ' <nama1&nama2>')
handler.tags = ['primbon']

handler.command = /^ramal(pasangan|jodoh)$/i

module.exports = handler