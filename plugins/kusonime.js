let handler = async (m, { conn, text, usedPrefix, command}) => {
  if (!text) throw `Contoh Penggunaan\n${usedPrefix+command} Tenki no ko`
  m.reply(`_*Tunggu permintaan anda sedang diproses....*_`)
  let data = await require('../lib/kusonime')(text)
  var linkdl = data.result
  let txt = `*「 Kusonime Search 」*\n\n`
  txt += `⦿ Judul : ${data.judul}
⦿ Genre : ${data.genre}
⦿ Total Eps : ${data.total_eps} Eps
⦿ Durasi : ${data.durasi}
⦿ Tgl Rilis : ${data.tgl_rilis}
⦿ Link : ${await shorten(data.link)}
⦿ Type : ${data.type}
⦿ Produser : ${data.produser}
⦿ Status : ${data.status}
⦿ Rate : ${'⭐'.repeat(data.rate)} (${data.rate})

Link Download
⦿ 360p : ${await shorten(linkdl['360'].find(a => a.includes('acefile')))}
⦿ 480p : ${await shorten(linkdl['480'].find(a => a.includes('acefile')))}
⦿ 720p : ${await shorten(linkdl['720'].find(a => a.includes('acefile')))}
⦿ 1080p : ${await shorten(linkdl['1080'].find(a => a.includes('acefile')))}

Deskripsi 
${data.desk}
`.trim()
 
  conn.sendMessage(m.chat, { url: data.thumb }, 'imageMessage', { caption: txt, quoted: m })
}
handler.help = ['kuso', 'kusonime'].map(a => a + ' <query>')
handler.tags = ['wibu']
handler.command = /^kuso(nime)?$/i
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
return url ? (await require('axios').get(`https://is.gd/create.php?format=simple&url=${url}`)).data : 'Not Found (404)'
}