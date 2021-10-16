let handler = m => m

handler.all = async function (m) {
if (m?.key.id.startsWith('XYZ0') || m.isBaileys) return 
if (global.this.user.jid != this.user.jid) return 
if (!prefix.test(m.text) && m.text && m.chat != 'status@broadcast' && !m.text.startsWith('>') && m.mtype !== 'groupInviteMessage' && DATABASE.data.chats[m.chat].simi) {
   try {
  this.updatePresence(m.chat, 'composing')
   sios = await require('axios').get('https://api.simsimi.net/v2?lc=id&text='+encodeURIComponent(m.text))
   await m.reply(sios.data.success.replace('- please update to api v2', ''))
   } catch (e) {
  throw e
   }
  }
  return true
}

module.exports = handler