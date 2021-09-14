const express = require('express')
const cors = require('cors')
const dbSetup = require('./db-setup')



const auth = require('./routes/auth')
const userData = require('./routes/userData')
const app = express()
dbSetup()

app.use(express.json())
app.use(cors())

// Routes----
app.use('/auth', auth)
app.use('/userData', userData)

app.listen(3200, () => {
    console.log('Server is running on port 3200')
})