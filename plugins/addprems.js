let handler = async (m, { conn }) => {
  
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (global.prems.includes(who.split`@`[0])) throw 'Sudah premium!'
    DATABASE.data.users[who].premium = true 
    conn.reply(m.chat, `Hai, @${who.split`@`[0]}. Kamu sudah premium!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })
  
}
handler.help = ['addprem *@user*']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)prem$/i
handler.rowner = true
module.exports = handler