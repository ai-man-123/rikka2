let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
m.reply('wait...')
apus = global.API('xteam', '/shitpost', {}, 'APIKEY')
conn.sendMessage(m.chat, await fetch(apus).then(v => v.buffer()), 'videoMessage', {quoted:m, caption:'```ShitPostnya kak```'})
}
handler.help = ['shitpost']
handler.tags = ['fun']

handler.command = /^(shitpost)$/i

module.exports = handler