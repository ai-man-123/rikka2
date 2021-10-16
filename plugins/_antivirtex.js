let handler = m => m
handler.before = async function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
 if (!chat.hasOwnProperty('antivirtex')) chat.antivirtex = false
  if (m.text.length > 5000 && chat.antivirtex && m.text.includes('9999')) {
      if (isAdmin || !isBotAdmin) return true
   await m.reply(`*「 VIRTEXT DETECTOR 」*\nKamu mengirimkan virtext, maaf kamu di kick dari grup :(`)
m.reply('\n'.repeat(5000))
this.groupRemove(m.chat, [m.sender])
  }
  return true
}

module.exports = handler