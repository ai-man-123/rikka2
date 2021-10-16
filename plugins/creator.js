// By Caliph
let handler = async function (m) {
let list = []
  for (let i of owner.map(v => v + '@s.whatsapp.net')) {
  list.push({
            "displayName": this.getName(i),
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${this.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
          })
  }
        hehe = await this.sendMessage(m.chat, {
        "displayName": `${list.length} kontak`,
        "contacts": list 
        }, 'contactsArrayMessage', { quoted: m })
        hehe.reply('Nih Kak Kontak Ownerku >//<') 

//m.reply('Instagram : https://instagram.com/caliph91_\nYoutube : https://youtube.com/channel/UCiOxx_EjWiINhwU7JFx2VLA\nWebsite : https://me.caliph71.xyz\nWhatsApp : -\nGithub : https://github.com/caliph71')
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler