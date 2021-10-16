let fetch = require('node-fetch')
let handler = async (m, { usedPrefix, conn, args , text, command}) => {
caption = `Nih kak Sudah Jadi\nJgn Lupa Follow\nhttps://instagram.com/caliph91_ ya kak >//<`
seplit = text ? text.split('|') : []
  switch(command) {
  case 'demon':
  if (!text) throw `Contoh Penggunaan\n${usedPrefix+command} teks`
  result = await meta('https://textpro.me/create-green-horror-style-text-effect-online-1036.html', [text])
  buff = await getBuffer(result)
  conn.sendMessage(m.chat, buff, 'imageMessage', { quoted: m, caption })
  break
  case 'transformer':
  if (!text) throw `Contoh Penggunaan\n${usedPrefix+command} teks`
  result = await meta('https://textpro.me/create-a-transformer-text-effect-online-1035.html', [text])
  buff = await getBuffer(result)
  conn.sendMessage(m.chat, buff, 'imageMessage', { quoted: m, caption })
  break
  case '3dstone':
  if (!text) throw `Contoh Penggunaan\n${usedPrefix+command} teks`
  result = await meta('https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html', [text])
  buff = await getBuffer(result)
  conn.sendMessage(m.chat, buff, 'imageMessage', { quoted: m, caption })
  break
  case 'neon':
  if (!text) throw `Contoh Penggunaan\n${usedPrefix+command} teks`
  result = await meta('https://textpro.me/create-3d-neon-light-text-effect-online-1028.html', [text])
  buff = await getBuffer(result)
  conn.sendMessage(m.chat, buff, 'imageMessage', { quoted: m, caption })
  break
  case 'glitchtext':
  if (!text) throw `Contoh Penggunaan\n${usedPrefix+command} teks`
  result = await meta('https://textpro.me/create-impressive-glitch-text-effects-online-1027.html', [text])
  buff = await getBuffer(result)
  conn.sendMessage(m.chat, buff, 'imageMessage', { quoted: m, caption })
  break
  case 'papercut':
  if (!text) throw `Contoh Penggunaan\n${usedPrefix+command} teks`
  result = await meta('https://textpro.me/create-art-paper-cut-text-effect-online-1022.html', [text])
  buff = await getBuffer(result)
  conn.sendMessage(m.chat, buff, 'imageMessage', { quoted: m, caption })
  break
  case 'gradient':
  if (!text) throw `Contoh Penggunaan\n${usedPrefix+command} teks`
  result = await meta('https://textpro.me/online-3d-gradient-text-effect-generator-1020.html', [text])
  buff = await getBuffer(result)
  conn.sendMessage(m.chat, buff, 'imageMessage', { quoted: m, caption })
  break
  case 'brokenglass':
  if (!text) throw `Contoh Penggunaan\n${usedPrefix+command} teks`
  result = await meta('https://textpro.me/broken-glass-text-effect-free-online-1023.html', [text])
  buff = await getBuffer(result)
  conn.sendMessage(m.chat, buff, 'imageMessage', { quoted: m, caption })
  break
  case '3dmetal':
  if (!text) throw `Contoh Penggunaan\n${usedPrefix+command} teks`
  result = await meta('https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html', [text])
  buff = await getBuffer(result)
  conn.sendMessage(m.chat, buff, 'imageMessage', { quoted: m, caption })
  break
  case 'magma':
  if (!text) throw `Contoh Penggunaan\n${usedPrefix+command} teks`
  result = await meta('https://textpro.me/create-a-magma-hot-text-effect-online-1030.html', [text])
  buff = await getBuffer(result)
  conn.sendMessage(m.chat, buff, 'imageMessage', { quoted: m, caption })
  break
  case 'glitchtext2':
  if (!text) throw `Contoh Penggunaan\n${usedPrefix+command} teks1|teks2`
  result = await meta('https://textpro.me/create-a-glitch-text-effect-online-free-1026.html', seplit)
  buff = await getBuffer(result)
  conn.sendMessage(m.chat, buff, 'imageMessage', { quoted: m, caption })
  break
  case 'harrypotter':
  if (!text) throw `Contoh Penggunaan\n${usedPrefix+command} teks`
  result = await meta('https://textpro.me/create-harry-potter-text-effect-online-1025.html', [text])
  buff = await getBuffer(result)
  conn.sendMessage(m.chat, buff, 'imageMessage', { quoted: m, caption})
  break
  case 'watercolor':
  if (!text) throw `Contoh Penggunaan\n${usedPrefix+command} teks`
  result = await meta('https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html', [text])
  buff = await getBuffer(result)
  conn.sendMessage(m.chat, buff, 'imageMessage', { quoted: m, caption })
  break
  case 'bpink':
  if (!text) throw `Contoh Penggunaan\n${usedPrefix+command} teks`
  result = await meta('https://textpro.me/create-blackpink-logo-style-online-1001.html', [text])
  buff = await getBuffer(result)
  conn.sendMessage(m.chat, buff, 'imageMessage', { quoted: m, caption })
  break
  case 'pornhub': case 'phlogo':
  if (!text) throw `Contoh Penggunaan\n${usedPrefix+command} teks1|teks2`
  result = await meta('https://textpro.me/pornhub-style-logo-online-generator-free-977.html', seplit)
  buff = await getBuffer(result)
  conn.sendMessage(m.chat, buff, 'imageMessage', { quoted: m, caption })
  break
  case 'captainamerica': case 'camerica':
  if (!text) throw `Contoh Penggunaan\n${usedPrefix+command} teks1|teks2`
  result = await meta('https://textpro.me/create-a-captain-america-text-effect-free-online-1039.html', seplit)
  buff = await getBuffer(result)
  conn.sendMessage(m.chat, buff, 'imageMessage', { quoted: m, caption })
  break
  case 'thunder':
  if (!text) throw `Contoh Penggunaan\n${usedPrefix+command} teks`
  result = await meta('https://textpro.me/online-thunder-text-effect-generator-1031.html', [text])
  buff = await getBuffer(result)
  conn.sendMessage(m.chat, buff, 'imageMessage', { quoted: m, caption })
  break
  case 'berry':
  if (!text) throw `Contoh Penggunaan\n${usedPrefix+command} teks`
  result = await meta('https://textpro.me/create-berry-text-effect-online-free-1033.html', [text])
  buff = await getBuffer(result)
  conn.sendMessage(m.chat, buff, 'imageMessage', { quoted: m, caption })
  break
  case 'underwater':
  if (!text) throw `Contoh Penggunaan\n${usedPrefix+command} teks`
  result = await meta('https://textpro.me/3d-underwater-text-effect-generator-online-1013.html', [text])
  buff = await getBuffer(result)
  conn.sendMessage(m.chat, buff, 'imageMessage', { quoted: m, caption })
  break
  // Tambah sendiri, w capek ajg
  }
}
f = [
 'underwater',
 'berry',
 'thunder',
 'captainamerica',
 'camerica',
'demon',
 'transformer', 
 '3dstone',
  'neon', 
  'glitchtext', 
  'papercut', 
  'gradient',
   'brokenglass',
    '3dbeach', 
    '3dmetal', 
    'magma',
    'glitchtext2',
    'harrypotter',
    'watercolor',
    'bpink',
    'pornhub',
    'phlogo'
    ]
handler.help = f
handler.tags = ['textpro']
handler.command = f

module.exports = handler

async function getBuffer(url) {
fet = await require('node-fetch')(url, { 
headers: {
"user-agent": "GoogleBot"
}
})
res = await fet.buffer()
return res
}

async function meta(url, text) {
return require('zrapi').textpro(url, text)
}