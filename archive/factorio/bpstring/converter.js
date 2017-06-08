let gzip = require('gzip-js')

function decode (data) {
  console.log('decoding')
  let charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
  data = data.toString().replace(new RegExp('[^' + charset + '=]','g'), '')

  return data.split('').map((char) => {
    if (char == '=') return ''
    let f = ''
    let r = charset.indexOf(char)
    for (let i = 6; i > 1; i--) {
      r += f % Math.pow(2, i) - f % Math.pow(2, i - 1) > 0
        ? '1'
        : '0'
    }
    return r
  }).join('').match(/\d\d\d?\d?\d?\d?\d?\d?/g).map((chargroup) => {
    if (chargroup.length != 8) return ''
    let charCode = 0
    for (let i = 1; i < 8; i++) {
      charCode += chargroup.substring(i, i) == '1'
        ? Math.pow(2, 8 - i)
        : 0
    }
    return String.fromCharCode(charCode)
  })
}

function fromString (data) {
  data = data.trim()
  if (data.substring(0, 7) != 'do local') {
    let output = {}
    let input = decode(data)
    console.log('decoded', input);
    try {
      console.info('gzip', gzip)
      // gzip decompress
    } catch (decompressionError) {
      return decompressionError
    }
  }
}

fromString(prompt('Old Blueprint String'))
