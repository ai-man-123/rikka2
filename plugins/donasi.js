let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel : [082325549376]
│ • Smartfren : [0882003806038]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay : [082325549376]
│ • Saweria : saweria.co/Caliph71
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler