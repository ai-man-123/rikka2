let handler = async (m, { args, usedPrefix, command }) => {
    if (!args[0]) throw `contoh:\n${usedPrefix + command} sticker`
    let { total, success, last, lastSuccess } = global.DATABASE.data.stats[args[0] + '.js']
    m.reply(`
*Plugin ${args[0]}*

*Total:* ${total}
*Berhasil:* ${success}
*Terakhir digunakan:* ${new Date(last)}
*Terakhir berhasil:* ${new Date(lastSuccess)}
`.trim())
}
handler.help = ['plugin *stiker*']
handler.tags = ['owner']
handler.command = /^plugin$/i
module.exports = handler