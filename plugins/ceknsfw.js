const fetch = require('node-fetch')
const FormData = require('form-data')
const { fromBuffer } = require('file-type')

 let handler  = async (m, { conn }) => {
  let q = m.quoted ? m.quoted : m
  let mimetype = (q.msg || q).mimetype || ''
  let img = /image|video/.test(mimetype) 
      if (!img) throw 'Media tidak ditemukan'
      try {
      m.reply('Checking your media~')
      med = await q.download()
      let { ext } = await fromBuffer(med)
      data = new FormData()
      data.append('img', med, 'tmp.'+ext)
     feth = await fetch(global.API('lol', '/api/nsfwcheck', {}, 'apikey'), { body: data, method: 'POST' })
     res = await feth.json()
     result = `「 𝐍𝐒𝐅𝐖 𝐂𝐇𝐄𝐂𝐊 」\n\nRate : ${res.result}\nNsfw : ${res.result.split('.')[0] > 50 ? '✅' : '❌'}`
     m.reply(result)
      } catch (e) {
      m.reply(`${e}`)
     }
}
handler.help = ['ceknsfw','isnsfw']
handler.tags = ['tools']
handler.command = /^(is|cek)nsfw$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.limit = true
handler.fail = null

module.exports = handler