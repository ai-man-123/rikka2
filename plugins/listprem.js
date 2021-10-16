/*
   Silahkan Di Pakek
   Tapi Bantu Rapihin :v
   Buatan: Caliph71
*/

const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  let prem = Object.entries(DATABASE.data.users).filter(v => v[1].premium).map(([jid, i]) => jid)
conn.sendMessage(m.chat, `「 List Premium 」` + `\n\n` + prem.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, MessageType.extendedText, { contextInfo: { mentionedJid: prem }, quoted: m })
}
handler.command = /^list(premium|prem)$/i
handler.owner = false

module.exports = handler