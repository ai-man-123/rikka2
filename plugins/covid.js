let fetch = require('node-fetch')


let handler  = async (m, { conn, args}) => {
  conn.updatePresence(m.chat, 'composing')
  if (args[0] && args[0] == 2) {
  result = `_Data Kasus Covid-19 Untuk Seluruh Provinsi Di Indonesia_ :\n\n`;
  let { data } = await require('axios').get('https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi');
  for (let i of data) {
  result += `- *Provinsi* : ${i.provinsi}\n- *Kasus* : ${format(i.kasus)}\n- *Dirawat* : ${format(i.dirawat)}\n- *Sembuh* : ${format(i.sembuh)}\n- *Meninggal* : ${format(i.meninggal)}\n\n======================\n\n`
  };
  return conn.reply(m.chat, result.trim(), m)
  } else if (args[0] && args[0] == 1) return m.reply("*Apa Itu Covid-19?*\n\nCOVID-19 adalah penyakit yang disebabkan oleh virus severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). COVID-19 dapat menyebabkan gangguan sistem pernapasan, mulai dari gejala yang ringan seperti flu, hingga infeksi paru-paru, seperti pneumonia. COVID-19 (coronavirus disease 2019) adalah jenis penyakit baru yang disebabkan oleh virus dari golongan coronavirus, yaitu SARS-CoV-2 yang juga sering disebut virus Corona.\n\nKasus pertama penyakit ini terjadi di kota Wuhan, Cina, pada akhir Desember 2019. Setelah itu, COVID-19 menular antarmanusia dengan sangat cepat dan menyebar ke puluhan negara, termasuk Indonesia, hanya dalam beberapa bulan. Penyebarannya yang cepat membuat beberapa negara menerapkan kebijakan untuk memberlakukan lockdown untuk mencegah penyebaran virus Corona. Di Indonesia, pemerintah menerapkan kebijakan Pembatasan Sosial Berskala Besar (PSBB) untuk menekan penyebaran virus ini.")
  ddd = await fetch('https://apicovid19indonesia-v2.vercel.app/api/indonesia')
  f = await ddd.json()
  moment = require('moment-timezone')(f.lastUpdate).tz('Asia/Jakarta').format('DD MMMM YYYY HH:mm:ss')
  let buttons = [
  {buttonId: '/infocovid 1', buttonText: {displayText: 'Apa Itu Covid-19?'}, type: 1},
  {buttonId: '/infocovid 2', buttonText: {displayText: 'Data Covid-19 Seluruh Provinsi Di Indonesia'}, type: 1},
    {buttonId: '/bantuan', buttonText: {displayText: 'Back To Menu'}, type: 1}
]
const buttonsMessage = {
    contentText: `Kasus Covid-19 Di Indonesia :\n\n- Positif : ${format(f.positif)}\n- Dirawat : ${format(f.dirawat)}\n- Sembuh : ${format(f.sembuh)}\n- Meninggal : ${format(f.meninggal)}\n\n*Terakhir di update* : _${moment}_`,    
    footerText: 'Informasi Seputar Virus Covid-19 🦠',
    buttons: buttons,
  imageMessage: await conn.toMSG({ url: 'https://storage.caliph71.xyz/img/covid-logo.jpg' }, 'imageMessage'),
    headerType: 'IMAGE'
}
const sendMsg = await conn.prepareMessageFromContent(m.chat,{buttonsMessage},{ quoted: m})

conn.relayWAMessage(sendMsg)
 }
handler.help = ['infocovid']
handler.tags = ['main', 'internet']
handler.command = /^(infocovid)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function format(number) {
return new Intl.NumberFormat().format(number)
}