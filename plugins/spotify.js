let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
m.reply('Downloading....')
  let { mp3, name, artists, album_name, release_date, cover_url } = await require('../lib/spotify')(args[0]).catch(() => m.reply('Error, Mungkin Linknya Gavalid'))
  conn.sendMessage(m.chat, await getBuffer(cover_url), 'imageMessage', { quoted: m, caption : `*Title* : ${name}\n*Artist* : ${artists}\n*Release* : ${release_date}\n*Album* : ${album_name}` })
  conn.sendMessage(m.chat, mp3, 'audioMessage', { quoted: m })
}
handler.help = ['spotify'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(spotify(dl)?)$/i

module.exports = handler

async function getBuffer(url) {
h = await require('node-fetch')(url)
j = await h.buffer()
return j 
}