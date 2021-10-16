const { MessageType } = require('@adiwajshing/baileys')
const { addExif } = require('../lib/sticker')
let fs = require('fs')
let ffmpeg = require('fluent-ffmpeg')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    let duration = (q.msg || q).seconds || ''
    let med = m.quoted ? m.quoted.fakeObj : m
    if (!/video|image/.test(mime) && q.mtype !== 'stickerMessage') throw `Reply Foto/Video Dengan Caption *${usedPrefix + command}*`
    if (duration > 10) throw `Maksimal 10 Detik!`
   let media = await conn.downloadAndSaveMediaMessage(med)
     let ran = (`./${new Date * 1}.webp`)
       await ffmpeg(`./${media}`)
        [q.mtype == 'videoMessage' ? 'inputFormat' : 'input'](q.mtype == 'videoMessage' ? media.split('.')[1] : media)
        .on('start', function (cmd) {
          console.log(`Started : ${cmd}`)
        })
        .on('error', function (e) {
          console.log(`Error : ${e}`)
          fs.unlinkSync(media)
          tipe = media.endsWith('.mp4') ? 'video' : 'gif'
          m.reply(`Error, Gagal Membuat sticker!`)
        })
        .on('end', async function () {
          console.log('Finish')
          buff = fs.readFileSync(ran)
          await conn.sendMessage(m.chat, await addExif(buff, packname, author), 'stickerMessage', { quoted: m })
          fs.unlinkSync(media)
          fs.unlinkSync(ran)
        })
       .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
        .toFormat('webp')
        .save(ran)
}
handler.help = ['stiker (caption|reply media)', 'stikergif (caption|reply media)']
handler.tags = ['sticker']
handler.command = /^s(tic?ker)?(gif)?(wm)?$/i

module.exports = handler