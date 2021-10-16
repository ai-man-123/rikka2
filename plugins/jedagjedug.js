let fetch = require('node-fetch')
let handler  = async (m, { conn, text}) => {
   if (text) q = text
   if (!text) q = random.choice(['ml', 'ff', 'beatvn'])
  ddd = await fetch('https://raw.githubusercontent.com/Caliph71/txt/main/jedagjedug.json')
  f = await ddd.json()
  try {
  let res = f[q]
  let randoma = random.choice(res)
  conn.sendMessage(m.chat, { url: randoma }, 'videoMessage', { quoted: m, caption: 'Jedag Jedug : '+q })
  } catch {
  throw `List Yang Tersedia :\n\n- ff\n- beatvn\n- ml`
  }
}
handler.help = ['jedagjedug']
handler.tags = ['fun']
handler.command = /^(jedagjedug)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler