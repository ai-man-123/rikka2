let fetch = require('node-fetch')


let handler  = async (m, { conn, text, command, usedPrefix }) => {
  if (!text) throw `Contoh Penggunaan\n${usedPrefix + command} kota1-kota2`
  if (!text.includes('-')) throw `Format Salah ❌\nContoh : ${usedPrefix + command} surabaya-jakarta`
  let [kota1, kota2] = text.split('-')
   link = global.API('lol', '/api/jaraktempuh', { kota1, kota2 }, 'apikey')
  ddd = await fetch(link)
  f = await ddd.json()
  if (ddd.status !== 200) throw f
  let { from, to, jarak, kereta_api, pesawat, mobil, motor, jalan_kaki } = f.result
  conn.reply(m.chat, `From : ${from.name}\nTo : ${to.name}\nJarak : ${jarak}\n\nPerkiraan Waktu :\nMotor : ${motor}\nMobil : ${mobil}\nKereta Api : ${kereta_api}\nPesawat : ${pesawat}\nJalan Kaki : ${jalan_kaki}`, m)
}
handler.help = ['jarak', 'jaraktempuh'].map(y => y + ' kota1-kota2')
handler.tags = ['internet']
handler.command = /^jarak(tempuh)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler