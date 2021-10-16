let yts = require("yt-search");
const Genius = require("genius-lyrics");
const Client = new Genius.Client("9U_CW5pY363Dcuh6YhxMdZUJtJcwRRJJk7rE-UuOiQfwpsJeqHYQPlclq9i13h5Z")


let handler = async(m, { conn, text }) => {

    if (!text) throw 'Masukan parameter, Contoh *#lirik it Will rain*'
  try {
  result = (await Client.songs.search(text))[0]
  let results = await yts(text)
  let vid = results.all[0]
  conn.reply(m.chat, await result.lyrics().catch(async err => {
  return (await require("axios").get(`https://recoders-area.caliph.repl.co/api/lirik?q=${encodeURIComponent(text)}`)).data.result.lirik
  }), m, { contextInfo : {
    externalAdReply: {
                    title: result.title,
                    body: result.fullTitle,
                    mediaType: 2,
                    thumbnailUrl: vid.image,
                    mediaUrl: vid.url
                }
     }, sendEphemeral: false, thumbnail: await require('node-fetch')(vid.image).then(v => v.buffer())
     })
  } catch (e) {
  m.reply('Ada Yang Error!')
  throw e
  }
}
handler.help = ['lirik'].map(v => v + ' <judul>')
handler.tags = ['internet']
handler.command = /^(lirik)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler