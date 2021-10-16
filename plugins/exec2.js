let { exec } = require('child_process')
let { format } = require('util')
let handler = async (m, { conn, isOwner, command, text }) => {
  if (global.conn.user.jid != conn.user.jid) return
 m.reply('```Executing...```'); 
  exec(command.trimStart()  + ' ' + text.trimEnd(), function (err, stdout, stder) {
  if (err) return m.reply(format(err), null, { detectLinks: false })
  if (stdout) m.reply(format(stdout), null, { detectLinks: false })
  if (stder) m.reply(format(stder), null, { detectLinks: false })
  })
 
}
handler.customPrefix = /^[$] /
handler.command = new RegExp
handler.rowner = true
module.exports = handler