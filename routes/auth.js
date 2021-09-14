const router = require('express').Router();
const Users = require('../db/models/users')
const bcrypt = require('bcrypt')
const jwtGenerator = require('../utils/jwtGenerator')
const authorization = require('../middlewares/authorization')

//register route

router.post('/register', async (req, res) => {
    try {
        let { name, email, handle, image, password } = req.body;

        const user = await Users.query().where('email', email)

        // check if user already exists
        if (user.length !== 0) {
            return res.status(401).send("User already exists")
        }

        // Encrypt password using bcrypt
        password = await bcrypt.hash(password, 8)

        // Insert into database
        const insertedUser = await Users.query().insert({
            name: name,
            email: email,
            handle: handle,
            image: image,
            password: password
        })
        console.log(insertedUser)

        //Generate JWT
        const token = jwtGenerator(insertedUser.id)

        res.json({ token })

    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server Error')
    }
})

//login route

router.post('/login', async (req, res) => {
    try {
        let { email, password } = req.body

        //check if user exists
        const user = await Users.query().where('email', email)
        if (user.length === 0) {
            return res.status(401).send({ message: 'Invalid credentials' })
        }

        //check if password is correct
        const isValidPassword = await bcrypt.compare(password, user[0].password)
        if (!isValidPassword) {
            return res.status(401).send({ message: 'Invalid credentials' })
        }

        //generate jwt token
        const token = jwtGenerator(user[0].id)
        res.json({ token })


    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server Error')
    }
})

router.get('/verify', authorization, async (req, res) => {
    try {
        res.send({ verified: true })

    } catch (error) {
        console.log(error.message)
        res.status(500).send({ verified: false })
    }
})


module.exports = router