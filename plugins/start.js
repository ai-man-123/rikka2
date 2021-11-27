let handler = async (m, { conn, text }) => {
try {
imeg = await conn.getProfilePicture(conn.user.jid)
} catch {
imeg = 'https://telegra.ph/file/06f39d57bd620ddcca93d.png'
}
 let buttons = [
  {buttonId: '/bantuan', buttonText: {displayText: 'LIST MENU'}, type: 1},
  {buttonId: '/info', buttonText: {displayText: 'STATUS BOT'}, type: 1},
   {buttonId: '/owner', buttonText: {displayText: 'OWNER BOT'}, type: 1}
]
const buttonsMessage = {
    contentText: `Hai ${conn.getName(m.sender)}

Call / VC Bot = Block
Spam Bot = Ban + Block

Group Support💬
https://chat.whatsapp.com/JXJWLOIdVwh6qL1biGcR7Y

Follow Me❤️
https://instagram.com/caliph91_

Website
https://caliph.my.id

Rest API 
https://api.caliph.my.id
`.trim(),    footerText: '🔰 Rikka-Bot By Caliph71🔰',
    buttons: buttons,
  imageMessage: await conn.toMSG({ url: imeg }, 'imageMessage'),
  headerType: 'IMAGE'
}
const sendMsg = await conn.prepareMessageFromContent(m.chat,{buttonsMessage},{ 
quoted: { 
  key: {
  fromMe: false,
  remoteJid: 'status@broadcast',
  participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: Object.keys(DATABASE.data.users).length, 
thumbnail: '',
    message: `Status : ${opts.disable ? 'Private' : 'Public'}\n${conn.battery ? `Battery : ${conn.battery.value}` : ``}`.trim(),
    orderTitle: 'FakeTroli', // Idk what this does
    orderId: require('crypto').randomBytes(10).toString('hex').toUpperCase(), // Biar Ga ke detect bug troli
    sellerJid: '0@s.whatsapp.net' // Seller
   }
   }} })

conn.relayWAMessage(sendMsg)
}
handler.command = /^(help|menu)$/i

module.exports = handler


function waktu(seconds) { 
seconds = Number(seconds); 
var d = Math.floor(seconds / (3600 * 24)); 
var h = Math.floor(seconds % (3600 * 24) / 3600); var m = Math.floor(seconds % 3600 / 60); 
var s = Math.floor(seconds % 60); 
var dDisplay = d > 0 ? d + (d == 1 ? " Hari,":" Hari,") : ""; 
var hDisplay = h > 0 ? h + (h == 1 ? " Jam,":" Jam,") : ""; 
var mDisplay = m > 0 ? m + (m == 1 ? " Menit,":" Menit,") : ""; 
var sDisplay = s > 0 ? s + (s == 1 ? " Detik,":" Detik") : ""; 
return dDisplay + hDisplay + mDisplay + sDisplay; 
}
