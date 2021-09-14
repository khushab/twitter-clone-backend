const router = require('express').Router();
//importing models
const Users = require('../db/models/users')
const Tweets = require('../db/models/tweets')
const Followings = require('../db/models/followings')


// ---------- Test routes-------
router.get('/users', async (req, res) => {
    const users = await Users.query()
    res.send(users)
})

router.get('/tweets', async (req, res) => {
    const tweets = await Tweets.query().withGraphFetched('user')
    res.send(tweets)
})

router.get('/followings', async (req, res) => {
    const followings = await Followings.query()
    res.send(followings)
})


// Homepage tweets
router.get('/homePageData', async (req, res) => {
    const id = req.user

})

module.exports = router