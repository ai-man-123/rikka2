const brainly = require('brainly-scraper-v2')
let axios = require('axios')
let handler = async function (m, { text }) {
  if (!text) throw 'Soalnya?'
  try {
  let res = await brainly(text)
  let axios = require('axios')
  let answer = res.data.map((v, i) => `_*PERTANYAAN KE ${i + 1}*_\n${v.pertanyaan}\n${v.jawaban.map((v,i) => `*JAWABAN KE ${i + 1}*\n${v.text}`).join('\n')}`).join('\n\n•------------•\n\n')
  m.reply(answer)
  } catch {
  m.reply('Server 1 Error, Trying Server 2')
  axios.get(`https://recoders-area.caliph.repl.co/api/brainly?q=${encodeURIComponent(text)}`)
.then(async ({ data: bren }) => {
 teks = '*「 _BRAINLY_ 」*\n\n'
	no = 0
   for (let data of bren.data) {
   hem = data.jawaban
    no += 1
	teks += `\n*➸ Pertanyaan ${no}:* ${data.pertanyaan}\n\n*➸ Jawaban ${no}:* ${data.jawaban[0].text}\n\n❉───────────❉\n`
	}
	conn.sendMessage(m.chat, teks, 'conversation', {quoted: m, detectLinks: false})
    })
  }
}
handler.help = ['brainly <soal>']
handler.tags = ['internet']

handler.command = /^brainly$/i

module.exports = handler