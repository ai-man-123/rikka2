let handler  = async (m, { conn, args }) => {
   m.reply(`Bot Ini Menggunakan Script : https://github.com/nurutomo/wabot-aq`)
}
handler.command = ['sc', 'script']
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
