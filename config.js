const ez = require("node-fetch");
global.owner = ['380944182435','6287755080455', '6285162570286'] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  clph: 'https://recoders-area.caliph.repl.co',
  caliph: 'https://api.caliph71.xyz',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  lol: 'https://api.lolhuman.xyz',
  vh: 'http://api.vhtear.com'
  
}
global.APIKeys = { // APIKey Here
   'https://api.caliph71.xyz': 'beta',
   'http://api.vhtear.com': 'rikkabotz',
   'https://api.lolhuman.xyz': 'rikkabotz',
  'https://api.xteam.xyz': 'ameysbot'
}
function getBuffer(buffer) {
return ez(buffer).then(a => a.buffer())
}
const choice = (array) => {
return array[Math.floor(Math.random() * array.length)]
}
// Sticker WM
global.packname = (`Rikka Bot`)
global.getBuffer = getBuffer
global.author = (`@caliph91_`)
global.sessionid = '48736705854:2Tq6joffmVDzaS:24'
global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})