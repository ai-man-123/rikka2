let fetch = require('node-fetch')


let handler  = async (m, { conn, text, command, usedPrefix }) => {
if (!text) throw `Format Salah ❌\nContoh : ${usedPrefix + command} 1.1.1.1`
  ha = await fetch(global.API('caliph', '/ip-lookup', { ip: text }, 'apikey'));
  res = await ha.json()
  if (res.status !== 200) throw res
  await conn.sendMessage(m.chat, { jpegThumbnail: await getBuffer(await conn.getProfilePicture(conn.user.jid)), degressLatitude: res.lat, degreesLongitude: res.lon, name: res.isp, address: `${res.city}, ${res.country}` }, 'locationMessage', { quoted: m })
  m.reply(JSON.stringify(res, null, 2))
}
handler.help = ['ip', 'iplookup'].map(y => y + ' 1.1.1.1')
handler.tags = ['internet']
handler.command = /^ip(lookup)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler