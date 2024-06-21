const express = require('express');
const router = express.Router();
const tweetController = require('../controllers/tweetController');


router.get('/', tweetController.getTweets);
router.get('/tweets/:id', tweetController.getTweetById);


router.get('/tweets/create', tweetController.createForm);
router.post('/tweets/create', tweetController.createTweet);


router.post('/update/:id', tweetController.updateTweet);

router.post('/tweets/delete/:id', tweetController.deleteTweet);

module.exports = router;
