const express = require('express')
const cors = require('cors')
const dbSetup = require('./db-setup')

//importing models
const Users = require('./db/models/users')
const Tweets = require('./db/models/tweets')
const Followings = require('./db/models/followings')

const auth = require('./routes/auth')
const app = express()
dbSetup()

app.use(express.json())
app.use(cors())

// Routes----
app.use('/auth', auth)


// ---------- Test routes-------
app.get('/users', async (req, res) => {
    const users = await Users.query()
    res.send(users)
})

app.get('/tweets', async (req, res) => {
    const tweets = await Tweets.query().withGraphFetched('user')
    res.send(tweets)
})

app.get('/followings', async (req, res) => {
    const followings = await Followings.query()
    res.send(followings)
})

app.listen(3200, () => {
    console.log('Server is running on port 3200')
})