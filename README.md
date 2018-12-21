## Convert JSON to encrypted and url-safe base62 string 

# Convenience over security

This package is made for usage with image resizing "cloud" function, not for security.

```javascript
const { parse, stringify, hash } = require('json-cipher-url')('secret')

const source = { width: 1000, format: "jpeg" }
const encrypted = stringify(source)
// UqOw6x3eYV5aM3Oo4PV69kAQWud9uyuUa0pVQjxO6Om

const decrypted = parse(encrypted)
// { width: 1000, format: "jpeg" }

// default length is 32
hash('test') // 3958a406c137a50653c0ffc71433aaf7
hash('test',16) // 3958a406c137a506
hash('test',36) // a31084b4e444c6fde34e4c6ac442491adeae
hash('test',42) // a31084b4e444c6fde34e4c6ac442491adeae0def5b
```