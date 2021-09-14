const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = async (req, res, next) => {
    try {
        const jwtToken = req.header('token');

        // check if the token exits
        if (!jwtToken) {
            return res.status(403).send({ message: 'Unauthorized' })
        }

        // verify JWT
        const payload = jwt.verify(jwtToken, process.env.secret)
        req.user = payload.user
        next()

    } catch (error) {
        console.log(error.message)
        return res.status(403).send({ message: 'Unauthorized' })
    }
}