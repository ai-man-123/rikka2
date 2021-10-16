let handler = m => m
let { promisify } = require('util')
let porn = require('is-porn')
let linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  if ('antinsfw' in DATABASE.data.chats[m.chat] == false) DATABASE.data.chats[m.chat].antinsfw = false
  let chat = global.DATABASE.data.chats[m.chat]
  let { host } = new URL(isUrl(m.text) ? isUrl(m.text)[0] : 'https://google.com')
  let isnsfw = await promisify(porn)(host)
  if (chat.antinsfw && isnsfw) {
      if (isAdmin || !isBotAdmin) return true
   await m.reply(`*「 PORN LINK DETECTOR 」*\nKamu mengirimkan link pornografi, maaf kamu di kick dari grup :(`)
       this.groupRemove(m.chat, [m.sender])
  }
  return true
}

module.exports = handler

const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi))
}