let handler = async (m, { conn, command, usedPrefix, text }) => {
    let which = command.replace(/get/i, '')
    if (!text) throw `Gunakan *${usedPrefix}list${which}* untuk melihat list nya`
    if (!(text in DATABASE.data.msgs)) throw `'${text}' tidak terdaftar di list pesan`
  let f = conn.serializeM(DATABASE.data.msgs[text])

prep = await conn.prepareMessageFromContent(m.chat, { [f.mtype]: f.message[f.mtype] }, { quoted:m})

conn.relayWAMessage(prep)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'get' + v + ' <text>')
handler.tags = ['database']
handler.command = /^get(vn|msg|video|audio|img|sticker)$/

module.exports = handler