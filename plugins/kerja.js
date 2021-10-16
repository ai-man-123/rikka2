let handler = async (m, { conn, text }) => {
let total = Math.floor(Math.random() * 99999);
let json = { exp: total }
conn.mining = conn.mining ? conn.mining : {}
 if (conn.mining[m.sender]) throw 'Sabar, Coldown 3 Detik!'
  conn.reply(m.chat, `Subarashi, Anda Mendapatkan\n*+${json.exp}* Uang(xp)`, m)
  conn.mining[m.chat] = true 
   global.DATABASE.data.users[m.sender].exp += json.exp * 1
   setTimeout(() => { 
   delete conn.mining[m.sender]
  }, 3 * 1000)
}

handler.help = ['kerja']
handler.tags = ['xp']
handler.command = /^(kerja|nguli|mining)/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler