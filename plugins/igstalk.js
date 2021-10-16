let { user } = require('../lib/ig')
let handler = async(m, { conn, text:users }) => {
  text = users.replace(/@/gi, '')
    if (!text) return conn.reply(m.chat, 'Masukan parameter, Contoh *#igstalk caliph91_*', m)

  await m.reply('Sedang di proses kak:D')
 let res = await user(text)
	 	let hasil = `~> *Username* : @${res.username}\n~> *Followers* : ${res.following} User(s)\n~> *Following* : ${res.followers} User(s)\n~> *Full Name* : ${res.full_name}\n~> *Private* : ${res.is_private ? '✅' : '❌'}\n~> *Verifed* : ${res.is_verified ? '✅' : '❌'}\n~> *Biography* : ${res.biography}\n\n*Follow juga*\nhttps://instagram.com/caliph91_`

   buffer = await require('node-fetch')(res.profile_pic_url_hd).then(v => v.buffer());
conn.sendMessage(m.chat, buffer, 'imageMessage', { quoted: m, caption: hasil })
}
handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['internet']
handler.command = /^(igstalk)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler