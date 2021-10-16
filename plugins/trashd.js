let handler = async (m, { conn, text }) => {
  conn.sendFile(m.chat, global.API('http://zekais-api.herokuapp.com', '/delete/', {
    url : await conn.getProfilePicture(m.sender).catch(_ => '')
  }), 'yt-comment.png', 'Here is your image', m)
}

handler.help = ['deltrash <comment>']
handler.tags = ['maker']

handler.command = /^(deltrash)$/i

module.exports = handler