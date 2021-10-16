let fetch = require('node-fetch')
let handler  = async (m, { conn }) => {
pepe = await conn.getProfilePicture().catch(() => 'https://storage.caliph71.xyz/img/itsuki.jpg')
baper = await fetch(pepe).then(a => a.buffer())
let listMessage = {
      "title": "Sewa Bot",
      "description": "Sewa Bot",
      "listType": "PRODUCT_LIST",
      "productListInfo": {
        "productSections": [
          {
            "title": "Sewa Bot",
            "products": [
              {
                "productId": "4632867223392342"
              }
            ]
          }
        ],
        "headerImage": {
          "productId": "4632867223392342",
          "jpegThumbnail": baper
          },
        "businessOwnerJid": "380944182435@s.whatsapp.net"
      },
      "footerText": "Rikka-Bot By @caliph91_"
    }
  

 conn.sendMessage(m.chat, listMessage, 'listMessage', { quoted: m })
 }
handler.help = ['sewa', 'sewabot']
handler.tags = ['main']
handler.command = /^sewa(bot)?$/i
module.exports = handler