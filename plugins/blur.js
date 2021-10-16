let { exec } = require('child_process')
let fs = require('fs')
const {Swiftcord} = require("swiftcord");
const canvast = new Swiftcord();
let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
  if (!/video|image/.test(mime)) throw `Balas video/foto yang ingin di blur dengan caption *${usedPrefix + command}*`
  if (/image/.test(mime)) {
   canva = await canvast.blur(await q.download(), 15)
   conn.sendMessage(m.chat, canva, 'imageMessage', { quoted: m })
   } else {
 media = await conn.downloadAndSaveMediaMessage(m.quoted ? await m.getQuotedObj() : m)
					ran = 'blur.mp4'
					exec(`ffmpeg -i ${media} -vf tmix=frames=8:weights="1 1 1 1 1 1 1 1" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return m.reply('Error!')
						hah = fs.readFileSync(ran)
						conn.sendMessage(m.chat, hah, 'videoMessage', {mimetype: 'video/mp4', quoted: m})
						fs.unlinkSync(ran)
					})
	}
}
handler.help = ['blur']
handler.tags = ['tools']

handler.command = /^(blur)$/i

module.exports = handler