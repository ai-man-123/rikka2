var {WAMessageProto} = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
heum = await require('node-fetch')('https://raw.githubusercontent.com/Caliph91/txt/main/loli.json').then(v => v.json())
let url = heum[Math.floor(Math.random() * heum.length)]
 let buttons = [
  {buttonId: '/loli', buttonText: {displayText: 'Get Again'}, type: 1}
]
const buttonsMessage = {
    contentText: `
Random Loli
`.trim(),    footerText: 'Rikka-Bot by @caliph71',
    buttons: buttons,
  imageMessage: await conn.toMSG({ url }, 'imageMessage'),
    headerType: 'IMAGE'
}
const sendMsg = await conn.prepareMessageFromContent(m.chat,{buttonsMessage},{ quoted: m})

conn.relayWAMessage(sendMsg)
}
handler.command = /^(loli)$/i
handler.tags = ['wibu']
handler.help = ['loli']
module.exports = handler