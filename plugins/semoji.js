// Terimakasih kpd RC047 :v
// Fitur By Xteams
// Modified by Nurutomo (Update Xteam :v)

const { sticker } = require('../lib/sticker')
const fetch = require('node-fetch')
const defaultType = 'apple'
let handler = async (m, { usedPrefix, conn, args, text }) => {
  let [tipe, emoji] = text.includes('|') ? text.split('|') : args
  if (tipe && !emoji) {
    emoji = tipe
    tipe = defaultType
  }
  if (!emoji) throw `Silahkan masukan emojinya\n\nMisal ${usedPrefix}semoji whatsapp 😎\n\nList Tipe:
- whatsapp
- facebook
- apple
- google
- microsoft`
  emoji = emoji.trim()
  tipe = tipe.trim().toLowerCase()

  let json = await semoji(emoji)
  let stiker = await sticker(null, json.find(v => v.nama == tipe).url, global.packname, global.author, [emoji])
  //   m.reply(`
  // Tipe: ${tipe}
  // Emoji: ${emoji}
  // `.trim())
  m.reply(stiker)
}
handler.help = ['semoji [tipe] <emoji>']
handler.tags = ['sticker']
handler.command = /^s?emo(ji)?$/i
module.exports = handler

async function semoji(hem) {
const got = require("got")
const cheerio = require("cheerio")
const result = []
	const data = await got(encodeURI(`https://emojipedia.org/${hem}/`), {
		method: "GET",
		headers: {
			"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36"
		}
	})
	const $ = cheerio.load(data.body)
	$("body > div.container > div.content > article > section.vendor-list > ul").each(function (asu, chuwi) {
		$(chuwi).find("li").each(function (sa, na) {
			const res = {
				nama: $(na).find("div > div.vendor-info > h2 > a").text().trim().toLowerCase(),
				url: $(na).find("div > div.vendor-image > img").attr("src")
			}
			result.push(res)
		})
	})
	const data2 = []
	result.map(Data => {
		if (Data.nama == undefined) return;
		if (Data.url == undefined) return;
		data2.push(Data)
	})
	return data2
	}