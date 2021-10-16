let fetch = require('axios').get
     let handler  = async (m, { conn, args }) => {
    await m.reply('Goodbye...')
     conn.groupRemove(m.chat, [m.sender])
}
handler.help = ['kickme']
handler.tags = ['group']
handler.command = /^kickme$/i
handler.group = true
handler.admin = false
handler.botAdmin = true
handler.fail = null

module.exports = handler
