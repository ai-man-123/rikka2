let limit = 30
var {WAMessageProto} = require('@adiwajshing/baileys')
let yts = require('yt-search')
let fetch = require('node-fetch')
const canvas = require('canvacord')
const { servers, yta, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, command, text, isPrems, isOwner }) => {
memeq = Math.floor(Math.random() * 99999999)
  if (!text) throw 'Cari apa?'
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let isVideo = /2$/.test(command)
  let { dl_link, thumb, title, filesize, filesizeF} = await (isVideo ? ytv : yta)(vid.url, 'id4')
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
const cardJoox = new canvas.Spotify()
                    .setAuthor(vid.author.name)
                    .setAlbum('YouTube')
                    .setStartTimestamp(vid.timestamp)
                    .setEndTimestamp(12)
                    .setImage(thumb)
                    .setTitle(title)
                cardJoox.build()
                    .then(async (buffer) => {
let buttons = [
  {buttonId: '/yta '+vid.url, buttonText: {displayText: 'Music 🎵'}, type: 1},
  {buttonId: '/ytv '+vid.url, buttonText: {displayText: 'Video 📼'}, type: 1},
{buttonId: '/cancel '+vid.videoId+memeq, buttonText: {displayText: 'Delete 🗑️'}, type: 1}
]
imeg = await conn.prepareMessage(m.chat, buffer, 'imageMessage')

mek = Object.keys(imeg.message) == 'ephemeralMessage' ? imeg.message.ephemeralMessage.message : imeg.message

const buttonsMessage = {
imageMessage: mek.imageMessage,
    contentText: `Lagu Ditemukan!

Silahkan Pilih Format Yang Mau Dikirim`.trim(),    footerText: 'Filesize : '+filesizeF,
    buttons: buttons,
    headerType: "IMAGE"
}
let sendMsg = await conn.prepareMessageFromContent(m.chat,{buttonsMessage},{ quoted: m, contextInfo: { mentionedJid: [m.sender] }})
sendMsg.key.id = vid.videoId+memeq
conn.relayWAMessage(sendMsg)
   })
   
}
handler.help = ['ytplay'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^(youtube|yt)play$/i

handler.exp = 0
handler.limit = false
handler.premium = false
module.exports = handler

async function getBuffer(url) {
ff = await fetch(url)
fff = await ff.buffer()
return fff
}

async function bitly(urls) {
fet = require('axios')
heh = await fet.get(`https://tobz-api.herokuapp.com/api/bitly?url=${urls}&apikey=Tobzzz17`)

return heh.data.result
}