let handler = async (m, { conn, text}) => {
  if (!text) throw 'Cari Apa?'
result = await require('wikijs').default({ apiUrl: 'https://id.wikipedia.org/w/api.php' }).page(text).then(page => page.rawContent())

  hasil = `
  *${text}*
  
  ${result}
  `.trim()
  m.reply(hasil)
}
handler.help = ['wiki', 'wikipedia'].map(v => v + '<query>')
handler.tags = ['internet']

handler.command = /^(wiki|wikipedia)$/i

module.exports = handler