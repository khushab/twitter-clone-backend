const express = require('express')
const cors = require('cors')
const dbSetup = require('./db-setup')
const Users = require('./db/models/users')

const auth = require('./routes/auth')
const app = express()
dbSetup()

app.use(express.json())
app.use(cors())

// Routes----
app.use('/auth', auth)

app.get('/users', async (req, res) => {
    const users = await Users.query()
    res.send(users)
})

app.listen(3200, () => {
    console.log('Server is running on port 3200')
})