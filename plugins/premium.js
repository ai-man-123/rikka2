let handler = async m => {
idis = await m.reply(`
╭─「 Shop  」
│ 
│ • Jadi User Premium : 20k / bulan
│ • Join Group : 10k / bulan
│ 
╰────

╭─「 Via  」
│ 
│ • Gopay : 6281215199447
│ • Telkomsel : 081215199447 
│ • Indosat : 085642337380 
│ 
╰────

Kalo Mau Join Grup / Jadi Premium 
Silahkan Chat Kontak Yang Ada Dibawah Ini 
`.trim()) // Tambah sendiri kalo mau
conn.sendContactArray(m.chat, owner.map(a => a + '@s.whatsapp.net'), { quoted: m })
}
handler.help = ['premium', 'shop']
handler.tags = ['info']
handler.command = /^(premium|shop)$/i

module.exports = handler