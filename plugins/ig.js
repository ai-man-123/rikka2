let fetch = require('node-fetch')
let { post } = require('../lib/ig')

let handler = async (m, { conn, args }) => {

  if (!args[0]) throw 'Uhm...url nya mana?'
  //let json = await res.json()
//  if (!json.result) throw json
  let s = await post(args[0]).catch(() => m.reply('Ada Yang Error!'))
  let text = `
Username: ${s.name} *(@${s.username})*
${s.likes} Likes
Caption:
${s.caption}
`.trim()
    conn.sendFile(m.chat, s.links[0].url, 'ig', text, m)
}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.premium = true
handler.command = /^(ig(dl)?)$/i

module.exports = handler