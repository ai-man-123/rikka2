let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, isPrems }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, lastclaim, registered, regTime, age } = global.DATABASE.data.users[who]
    let username = conn.getName(who)
    let userRegis = Object.entries(DATABASE.data.users).filter(v => v[1] && v[1].registered).map(([jid])=> jid)
    let str = `
┌──「 𝗟𝗜𝗠𝗜𝗧 」──
│
├  Nama : ${registered ? username : name}
├  Nomor : ${require('awesome-phonenumber')(`+${who.split('@')[0]}`).getNumber('international')}
├  Limit : *${isPrems ? "ꝏ" : limit}*
├  Exp : *${exp}*
├  User Terdaftar : ${userRegis.length} ${userRegis.length > 1 ? 'User(s)' : 'User'} 
├  Premium : ${isPrems ? "✅" : "❌"}
├  Terdaftar : ${registered ? "✅" : "❌"}
│
└──「 𝗥𝗜𝗞𝗞𝗔 𝗕𝗢𝗧 」──
`.trim()
    let mentionedJid = [who]
    m.reply(str)
  }
}
handler.help = ['dompet', 'bank']
handler.tags = ['xp']
handler.command = /^(dompet|limit|bank)$/i
module.exports = handler