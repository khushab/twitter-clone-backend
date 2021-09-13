const jwt = require('jsonwebtoken')
require('dotenv').config()

function jwtGenerator(id) {
    const payload = {
        user: id
    }

    return jwt.sign(payload, process.env.secret, { expiresIn: "9999hr" })
}

module.exports = jwtGenerator