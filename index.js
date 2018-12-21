const BASE62 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const { encode, decode } = require('base-x')(BASE62)
const jsonCipher = require('json-cipher')
module.exports = (secret, algorithm = 'aes-256-cbc') => {
  const { cipher, decipher } = jsonCipher(secret, algorithm)
  return {
    stringify: object => encode(cipher(object)),
    parse: string => decipher(decode(string)),
    hash(string, length = 32) {
      const hash = x => {
        const hashed = cipher(x)
          .toString('hex')
          
        if (hashed.length < length) return hash(hashed)
        else return hashed.substring(0, length)
      }
      return hash(string)
    },
  }
}
