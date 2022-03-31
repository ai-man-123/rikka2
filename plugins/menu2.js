let fetch = require('node-fetch')

let { JSDOM } = require('jsdom')
let fs = require ('fs')
let path = require('path')
let levelling = require('../lib/levelling')
const moment = require('moment-timezone')
let handler  = async (m, { conn, usedPrefix: _p }) => {
  try {
const jam = moment.tz('Asia/Jakarta').format('HH')
 var ucapanWaktu = 'Selamat Pagi 🌄'

				if (jam >= '03' && jam <= '10') {
				ucapanWaktu = 'Selamat Pagi 🌄'
				} else if (jam >= '10' && jam <= '13') {
				ucapanWaktu = 'Selamat Siang ☀️'
				} else if (jam >= '13' && jam <= '18') {
				ucapanWaktu = 'Selamat Sore 🌅'
				} else if (jam >= '18' && jam <= '23') {
				ucapanWaktu = 'Selamat Malam 🌙'
				} else {
				ucapanWaktu = 'Selamat Malam 🌙'
				}

let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
    let { exp, limit, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id'
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let totalfeature = Object.values(global.plugins).filter(v => v.help && v.tags).length
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.DATABASE.data.users).length
    let rtotalreg = 0
    try {
    
    rtotalreg = Object.values(global.DATABASE.data.users).filter(user => user.registered == true).length
    } catch {
  
    }
  
        let tags = {
      'main': '𝙈𝘼𝙄𝙉',
      'stres': '𝙎𝙏𝙍𝙀𝙎 𝙈𝙀𝙉𝙐',
      'api': '𝘼𝙋𝙄 𝙈𝙀𝙉𝙐',
      'wibu': '𝘼𝙉𝙄𝙈𝙀 𝙈𝙀𝙉𝙐',
      'game': '𝙂𝘼𝙈𝙀',
      'xp': '𝙀𝙓𝙋 & 𝙇𝙄𝙈𝙄𝙏',
      'sticker': '𝙎𝙏𝙄𝘾𝙆𝙀𝙍',
      'textpro': '𝙏𝙀𝙓𝙏𝙋𝙍𝙊',
      'kerang': '𝙆𝙀𝙍𝘼𝙉𝙂 𝙈𝙀𝙉𝙐',
      'quotes': '𝙌𝙐𝙊𝙏𝙀𝙎',
      'admin': '𝘼𝘿𝙈𝙄𝙉',
      'group': '𝙂𝙍𝙊𝙐𝙋',
      'premium': '𝙋𝙍𝙀𝙈𝙄𝙐𝙈',
      'sange': '𝙉𝙎𝙁𝙒',
      'internet': '𝙄𝙉𝙏𝙀𝙍𝙉𝙀𝙏',
      'nulis': '𝙈𝘼𝙂𝙀𝙍𝙉𝙐𝙇𝙄𝙎 & 𝙇𝙊𝙂𝙊',
      'downloader': '𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍',
      'tools': '𝙏𝙊𝙊𝙇𝙎',
      'fun': '𝙁𝙐𝙉',
      'jadibot': '𝙅𝘼𝘿𝙄𝘽𝙊𝙏',
      'owner': '𝙊𝙒𝙉𝙀𝙍',
      'host': '𝙃𝙊𝙎𝙏',
      'advanced': '𝘼𝘿𝙑𝘼𝙉𝘾𝙀𝘿',
      'info': '𝙄𝙉𝙁𝙊',
      '': '𝙉𝙊 𝘾𝘼𝙏𝙀𝙂𝙊𝙍𝙔',
    }
    for (let plugin of Object.values(global.plugins))
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!tag in  tags) tags[tag] = tag
    let help = Object.values(global.plugins).map(plugin => {
      return {
        help: plugin.help,
        tags: plugin.tags,
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let menu of help)
        if (menu.tags && menu.tags.includes(tag))
          if (menu.help) groups[tag].push(menu)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || `
┏━━⬣ 𝙄𝙉𝙁𝙊
┃
┃⬡ Mode : ${opts.disable ? 'Self' : 'Public'}
┃⬡ Jam : ${require('moment-timezone').tz("Asia/Jakarta").format("HH:mm:ss")}
┃⬡ Tanggal : ${require('moment-timezone').tz("Asia/Jakarta").format("DD-MM-YYYY")}
┃⬡ Feature : ${totalfeature} *Features*
┃⬡ Battery : *${conn.battery ? conn.battery.value : '85'}℅*
┗⬣
`
    let header = conn.menu.header || '┏━━⬣ %category\n┃'
    let body   = conn.menu.body   || '┃⬡ %cmd%islimit'
    let footer = conn.menu.footer || '┗⬣\n'
    let after  = conn.menu.after  || (conn.user.jid == global.conn.user.jid ? '' : `Powered by @${global.conn.user.jid.split`@`[0]}`) + `\n*%npmname@^%version*\n\`\`\`\%npmdesc\`\`\``
    let _text  = before + '\n'
    for (let tag in groups) {
      _text += header.replace(/%category/g, tags[tag]) + '\n'
      for (let menu of groups[tag]) {
        for (let help of menu.help)
          _text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? ' (Limit)' : '')  + '\n'
      }
      _text += footer + '\n'
    }
    _text += after
    text =  typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, time, totalreg, rtotalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).join`|`})`, 'g'), (_, name) => ''+replace[name])
   ppbot = await conn.getProfilePicture(conn.user.jid)
imeg = await conn.toMSG({ url: ppbot }, 'imageMessage')
imeg['jpegThumbnail'] = await getBuffer(ppbot);
imeg.fileLength = 99999999999999999;
const freply =     {
					"productMessage": {
						"product": {
							"productImage": imeg,
							"productId": "0",
							"title": `Rikka-Bot Aiman`,
							"description" : text.trim(),
	"productImageCount": 1,
	"currencyCode": "IDR",
	"url": "wa.me/60102810046",
	"priceAmount1000": "99999999999"
						},
						"businessOwnerJid": "0@s.whatsapp.net"
						}
						}

ceh = await conn.prepareMessageFromContent(m.chat, freply, {quoted: m, sendEphemeral: true})
conn.relayWAMessage(ceh)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.command = /^(allmenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
