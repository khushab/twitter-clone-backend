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

// who to follow
router.get('/whoToFollow', async (req, res) => {
    try {
        const id = 3
        // const id = req.user
        const allUsers = await Users.query()
        const followingUsers = await Followings.query().where('userId', id)

        const followingIds = {}
        followingIds[id] = true
        for (let i = 0; i < followingUsers.length; i++) {
            followingIds[followingUsers[i]['followingId']] = true
        }
        const whoToFollow = []
        for (let i = 0; i < allUsers.length; i++) {
            let userId = allUsers[i]['id'].toString()
            if (followingIds[userId] == true) {
                continue
            } else {
                whoToFollow.push(allUsers[i])
            }
        }

        res.send(whoToFollow)

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