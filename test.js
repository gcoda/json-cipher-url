const assert = require('assert').strict;

const { parse, stringify, hash } = require('.')('aes-128-cbc')

const source = { width: 1000, format: "jpeg" }
const encrypted = stringify(source)

const decrypted = parse(encrypted)
// { width: 1000, format: "jpeg" }

assert.equal(encrypted, 'hUL3bcu4tLiiKjctHGAU4fZQa3DNEYDCixCW1uU1Eye')
assert.deepEqual(decrypted, source)

// console.log(stringify({ source }))
const cryptedSource = '64hTADMvagwTKpUPIEw6K2cSQzuvlJQrqPMIQGTCRIy77se5Slkz5euWVOy7gO4a3'

assert.deepEqual(parse(cryptedSource), {source})

assert.equal(hash(false).length, 32)
assert.equal(hash('test'), '3958a406c137a50653c0ffc71433aaf7')

// default length is 32
console.log(hash('test'))
console.log(hash('test',16))
console.log(hash('test',36))
console.log(hash('test',42))