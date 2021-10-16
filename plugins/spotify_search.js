let yts = require('axios')

let handler = async (m, { text, conn }) => {
  if (!text) throw 'Cari apa?'
  let { data } = (await yts(`https://api.zeks.me/api/spotify?apikey=caliph_71&q=${text}`)).data
  let anjing = []
    for (let i of data) {
anjing.push({
      "title": `${i.title}`,
      "rows": [
        {
          "title": `${i.title}`,
          "description": `\n\n~> Artists : ${i.artists}\n~>  Album : ${i.album}
    `.trim(),
          "rowId": `/spotify ${i.url}`
        }
      ]
    })
    }
  hem = {
  "title": "SPOTIFY SEARCH",
  "description": "Please Select          ",
  "buttonText": "TAP HERE",
  "listType": "SINGLE_SELECT",
  "sections": anjing
  }
  hilih = await conn.prepareMessageFromContent(m.chat, { listMessage: hem }, {quoted: m, sendEphemeral: true, thumbnail: global.thumbnail ? global.thumbnail : Buffer.alloc(0)})
  conn.relayWAMessage(hilih)
}
handler.help = ['spotifysearch'].map(v => v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^(spotifysearch)$/i

module.exports = handler