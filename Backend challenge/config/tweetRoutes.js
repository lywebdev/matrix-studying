const express = require('express');
const router = express.Router();
const tweetController = require('../controllers/tweetController');
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const jwtAuth = (req, res, next) => {
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.redirect('auth/login');
    }

    try {
        req.user = jwt.verify(token, JWT_SECRET);
        next();
    } catch (error) {
        res.redirect('auth/login');
    }
};


router.get('/', tweetController.getTweets);

router.get('/tweets/create', jwtAuth, tweetController.createForm);
router.post('/tweets/create', jwtAuth, tweetController.createTweet);

router.get('/tweets/edit/:id', jwtAuth, tweetController.updateTweetForm);
router.post('/tweets/update/:id', jwtAuth, tweetController.updateTweet);

router.get('/tweets/:id', tweetController.getTweetById);


router.post('/tweets/delete/:id', jwtAuth, tweetController.deleteTweet);

module.exports = router;
