let get = require('node-fetch')
let handler = async (m, { conn,text,args}) => {
 let data = await get('https://rikka-api.herokuapp.com/cekapikey?apikey='+args[0]).then(v => v.json())
  if (data.status != 200) throw `API : https://rikka-api.herokuapp.com\nApikey : ${args[0]}\n\nApikey Invalid, Silahkan Chat Owner Atau Generate Apikey Sendiri Dengan Cara Mengetik Command *#generatekey*`
  if (data.status == 200) m.reply(`API : https://rikka-api.herokuapp.com\nApikey : ${args[0]}\nStatus : Valid\n\nApikey Kamu Valid, Tenang Kak, Apikeynya Unlimited Kok`)
}
handler.help = ['cekey']
handler.tags = ['api']

handler.command = /^cek(token|apikey|key)$/i

module.exports = handler