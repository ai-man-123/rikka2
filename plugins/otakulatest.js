let handler = async (m, { conn }) => {
  let data = await require('../lib/otakudesu').latest()
  let txt = `*「 Otakudesu Latest 」*\n\n`
  for (let i of data) {
  txt += `Judul : ${i.judul}\nEps : ${i.eps}\nRilis : ${i.hri} ${i.tgl}\nLink : ${i.link}\n\n`
  }
  conn.sendMessage(m.chat, { url: data[Math.floor(Math.random() * data.length)].thumb }, 'imageMessage', { quoted: m, caption: txt })
}
handler.help = ['otakulatest', 'otakudesulatest']
handler.tags = ['wibu']
handler.command = /^((otaku|otakudesu)latest)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler