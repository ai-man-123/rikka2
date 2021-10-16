let axios = require('axios')
let cheerio = require('cheerio')

module.exports = async function ngarang(text) {
let hasal = []
await axios.get(`http://ngarang.com/link-grup-wa/daftar-link-grup-wa.php?search=${text}&searchby=name`, {
method: 'GET'
}).then(res => {
let hah = cheerio.load(res.data)
hah('div.wa-chat-body').each(function(c, d) {
let bokepli = hah(d).find('a').attr('href')
let wers = hah(d).find('div.wa-chat-title-text').text().trim()
let result = {
	name_group: wers,
	link: bokepli
}
hasal.push(result)
})
})
return hasal
}