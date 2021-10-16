const summarize = require("text-summarisation");

let handler = async function (m, { text }) {
teks = m.quoted ? m.quoted.text : text;

if (!teks) throw 'Teksnya Mana?';
m.reply('Processing....')
  const result = await summarize(teks, { sentences: 2 });
m.reply(result)
}
handler.help = ['rangkum <soal>']
handler.tags = ['internet']

handler.command = /^rangkum$/i

module.exports = handler