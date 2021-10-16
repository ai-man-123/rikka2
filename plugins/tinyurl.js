let handler = async (m, { args }) => {
if (!args[0]) throw 'Tidak Ada Url'
m.reply('Wait....')
require('tinyurl').shorten(args[0], function (res, err) {

if (err) throw err
conn.sendMessage(m.chat, res, 'conversation', { quoted: m, detectLinks: false })
})
}
handler.help = ['tinyurl <url>']
handler.tags = ['internet']
handler.command = /^(tinyurl)$/i

module.exports = handler