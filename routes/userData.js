const router = require('express').Router();
//importing models
const Users = require('../db/models/users')
const Tweets = require('../db/models/tweets')
const Followings = require('../db/models/followings')

// importing middlewares
const authorization = require('../middlewares/authorization')


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

// profile data
router.get('/me', authorization, async (req, res) => {
    try {
        console.log(req)
        id = req.user
        const profile = await Users.query().findById(id)
        res.send(profile)

    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server Error')
    }
})

// user tweets
router.get('/mytweets', authorization, async (req, res) => {
    try {
        id = req.user
        const myTweets = await Tweets.query().where('userId', id).withGraphFetched('user')
        res.send(myTweets)

    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server Error')
    }
})

// post tweets
router.post('/tweet', authorization, async (req, res) => {
    try {
        id = req.user
        const { tweet } = req.body
        const myTweets = await Tweets.query().insert({
            tweet: tweet,
            userId: id
        })
        res.send(myTweets)

    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server Error')
    }
})

// Homepage tweets
router.get('/homePageData', async (req, res) => {
    const id = req.user

})

module.exports = router