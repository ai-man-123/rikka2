const UploadFile = require('../lib/uploadFile2')
const uploadImage = require('../lib/uploadImage')
let { sizeFormatter } = require('human-readable')
let format = sizeFormatter({
            std: 'JEDEC',
            decimalPlaces: 2,
            keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`
})

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime) &&  5000000 > media.length 
  let link = await (isTele ? uploadImage : UploadFile)(media)
  m.reply(`URL : ${isTele ? link : link.url}\nSIZE : ${format(media.length)}\nMSG : ${isTele ? '(No Expiry Date)' : '(Unlimited Time Use + Expired in 2 days)'}`.trim())
}
handler.help = ['upload (caption|reply media)']
handler.tags = ['tools']
handler.command = /^upload$/i

module.exports = handler