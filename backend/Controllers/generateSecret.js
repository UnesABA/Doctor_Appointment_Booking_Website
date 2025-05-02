import crypto from "crypto"

const key = crypto.randomBytes(256).toString("base64")
console.log(key)
