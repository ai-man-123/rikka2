let handler = async (m, { conn, text, usedPrefix, command}) => {
  if (!text) throw `Contoh Penggunaan\n${usedPrefix+command} eromanga sensei`
  let data = await require('../lib/otakudesu').search(text)
  let txt = `*「 Otakudesu Search 」*\n\n`
  for (let i of data) {
  txt += `Judul : ${i.judul_}
  Judul Jepang : ${i.japanese_title}
  Total Episode : ${i.total_eps} Episode
  Rilis : ${i.tgl_rilis}\nGenre : ${i.genre}
  Status : ${i.status}\nRating : ${i.rating}
  Produser : ${i.producer}
  Link : ${await shorten(i.link_)}
  Studio : ${i.studio.split(':')[1]}
  Tipe : ${i.tipe}
  Durasi : ${i.durasi}
  Batch : ${await shorten(i.batch)}
  360p : ${i.link_dl['720p'] ? await shorten(i.link_dl['360p']) : ''}
  480p : ${i.link_dl['720p'] ? await shorten(i.link_dl['480p']) : ''}
  720p : ${i.link_dl['720p'] ? await shorten(i.link_dl['720p']) : ''}
  
  ${i.sinopsis}`.trim()
  }
  conn.sendMessage(m.chat, { url: data[0].thumb_ }, 'imageMessage', { quoted: m, caption: txt })
}
handler.help = ['otakusearch', 'otakudesusearch'].map(a => a + ' <query>')
handler.tags = ['wibu']
handler.command = /^((otaku|otakudesu)search)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

async function shorten(url){
return (await require('axios').get(`https://is.gd/create.php?format=simple&url=${url}`)).data
}