let { get } = require('axios')
// By Caliph
let handler = async function (m) {
 try {
 let { data } = await get('https://rikka-api.herokuapp.com/generatetoken')
  m.reply(`API : https://rikka-api.herokuapp.com\nApikey : ${data.apikey}`)
  } catch {
  throw 'Error!'
  }
}
handler.help = ['generatekey']
handler.tags = ['api']

handler.command = /^generate(token|apikey|key)$/i

module.exports = handler