let handler = async (m, { text, args }) => {
  if (!args[0]) throw 'Pilih enable atau disable'
  let isEnable = /enable|on/gi.test(args[0])
  let isDisable = /disable|off/gi.test(args[0])

  if (isEnable){
  opts.autoreadall = !0
  m.reply('Sukses Mengaktifkan autoread')
} else {
 if (!isDisable) throw 'Pilih enable atau disable'
m.reply('Sukses Menonaktifkan autoread')
opts.autoreadall = false
}
}
handler.help = ['autoread']
handler.tags = ['host']
handler.rowner =!0
handler.command = /^autoread$/i

module.exports = handler
