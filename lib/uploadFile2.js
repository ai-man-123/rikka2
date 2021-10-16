const fetch = require('node-fetch')
const FormData = require('form-data')
const { fromBuffer } = require('file-type')
let { sizeFormatter } = require('human-readable')
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})

module.exports = async buffer => {
  let { ext } = await fromBuffer(buffer)
  form = require('form-data')


  data = new form()


  data.append('files[]', buffer, 'hasil.'+ext)

  fetcher = await fetch("https://uguu.se/upload.php", { method: 'POST', body: data })

  respon = await 
fetcher.json()
  res = { status: respon.success ? 200 : 500, size: format(buffer.length), url: respon.files[0].url }
  return res
  }