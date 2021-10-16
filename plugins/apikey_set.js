let { get } = require('axios')
// By Caliph
let handler = async (m, { conn, text , command, args}) => {
 try {
 let { data } = await get(`https://rikka-api.herokuapp.com/${command}?apikey=${args[0]}`)
  m.reply(`Sukses~`)
  } catch {
  throw 'Error!'
  }
}
handler.tags = ['api']
handler.rowner = true
handler.command = /^(add|del)(token|apikey|key)$/i

module.exports = handler