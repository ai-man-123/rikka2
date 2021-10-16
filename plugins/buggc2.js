let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, args }) => {
     for (let i of '.'.repeat(args[0])) {
await conn.relayWAMessage(global.mm=conn.
prepareMessageFromContent(m.chat, conn.
prepareDisappearingMessageSettingContent(0),
{}),{waitForAck:!0}).catch(console.log)
}
m.reply('Sukses...')
}

handler.command = /^ah$/i
handler.rowner = true
module.exports = handler