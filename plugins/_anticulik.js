let handler = m => m

handler.all = async function (m) {
if (m.key.fromMe) return 
    if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `「 Donasi • Pulsa 」

• *Gopay:* 6281215199447
• *Telkomsel:* 6281215199447

Donasi semampunya untuk mendukung bot ini tetap hidup untuk kalian^_^
Kalau gak mampu yang di atas bisa juga *follow ig* https://instagram.com/caliph91_

Kontak pemilik saya⬇️⬇️
`, m)
  for (let i of owner) {
this.sendContact(m.chat, i, conn.getName(i+'@s.whatsapp.net'), idnya)
}
  }
  return true
}

module.exports = handler
