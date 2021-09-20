const express = require('express')
const cors = require('cors')
const dbSetup = require('./db-setup')

const PORT = process.env.PORT || 3200


const auth = require('./routes/auth')
const userData = require('./routes/userData')
const app = express()
dbSetup()

app.use(express.json())
app.use(cors())

// Routes----
app.get('/', (req, res) => {
    res.send('The twitter clone is working')
})
app.use('/auth', auth)
app.use('/userData', userData)

app.listen(PORT, () => {
    console.log('Server is running on port 3200')
})