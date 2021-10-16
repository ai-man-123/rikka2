let handler = async (m, { conn, usedPrefix, command, text, args, isROwner, isAdmin }) => {
  switch (args[0].toLowerCase()) {
    
    case 'offline':
    case 'off':
      opts.disable = true
      m.reply('```STATUS : OFFLINE```')
      break
      case 'online':
    case 'on':
      opts.disable = false
      m.reply('```STATUS : ONLINE```')
      break
  }
      
}
handler.command = /^bot$/i
handler.rowner = true
module.exports = handler