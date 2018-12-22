const BASE62 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const { encode, decode } = require('base-x')(BASE62)
const jsonCipher = require('json-cipher')

module.exports = (secret, algorithm = 'aes-256-cbc') => {
  const { cipher, decipher, hmac } = jsonCipher(secret, algorithm)
  return {
    stringify: object => encode(cipher(object)),
    parse: string => decipher(decode(string)),
    cipher,
    decipher,
    hmac,
    hash: hmac,
  }
}
