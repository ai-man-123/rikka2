let yts = require('yt-search')

let handler = async (m, { text, conn }) => {
  if (!text) throw 'Cari apa?'
  let results = await yts(text)
  let anjing = []
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': 
      anjing.push({
      "title": `${v.title}`,
      "rows": [
        {
          "title": `${v.title}`,
          "description": `*${v.title}* (${v.url})
Duration: ${v.timestamp}
Uploaded ${v.ago}
${v.views} views
      `.trim(),
          "rowId": `/ytplay ${v.url}`
        }
      ]
    })
    break
      case 'channel':
      anjing.push({
      "title": `${v.title}`,
      "rows": [
        {
          "title": `${v.name}`,
          "description":  `
*${v.name}* (${v.url})
_${v.subCountLabel} (${v.subCount}) Subscriber_
${v.videoCount} video
`.trim(),
          "rowId": `/ytstalk ${v.name}`
        }
      ]
    })
    break
    }
  }).filter(v => v).join('\n========================\n')
  hem = {
  "title": "YT-SEARCH",
  "description": "Silahkan Gan Dipilih              ",
  "buttonText": "PENCET",
  "listType": "SINGLE_SELECT",
  "sections": anjing
  }
  hilih = await conn.prepareMessageFromContent(m.chat, { listMessage: hem }, {quoted: m, sendEphemeral: true, thumbnail: global.thumbnail ? global.thumbnail : Buffer.alloc(0)})
  conn.relayWAMessage(hilih)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i

module.exports = handler