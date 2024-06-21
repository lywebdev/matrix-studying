const Tweet = require('./../models/TweetSchema');
const {verify} = require("jsonwebtoken");
const User = require("../models/UserSchema");
const moment = require("moment");

const JWT_SECRET = process.env.JWT_SECRET;


exports.tweetFormattedDate = function(date) {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
};


exports.getTweets = async (req, res) => {
    try {
        const tweets = await Tweet.find().populate('user', 'email');
        const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];

        let user = null;
        if (token) {
            try {
                user = verify(token, JWT_SECRET);

                user = await User.findOne({email: user.email});
            } catch (invalidSignatureError) {
            }
        }

        res.render('index', {
            tweets: tweets,
            user: user,
            tweetFormattedDate: exports.tweetFormattedDate,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getTweetById = async (req, res) => {
    try {
        const tweet = await Tweet.findById(req.params.id).populate('user', 'email');
        if (!tweet) {
            return res.status(404).json({ message: 'Twit not found' });
        }

        const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];

        let user = null;
        if (token) {
            try {
                user = verify(token, JWT_SECRET);
                user = await User.findOne({email: user.email});
            } catch (invalidSignatureError) {
            }
        }


        res.render('tweet', {
            tweet: tweet,
            user: user,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createForm = async (req, res) => {
    res.render('tweet-create');
}

exports.createTweet = async (req, res) => {
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];

    let user = null;
    if (token) {
        try {
            user = verify(token, JWT_SECRET);

            user = await User.findOne({email: user.email});
        } catch (invalidSignatureError) {
            res.redirect('/auth/login');
        }
    }
    if (user === null) {
        res.redirect('/auth/login');
    }


    const tweet = new Tweet({
        title: req.body.title,
        tweet: req.body.tweet,
        user: user
    });

    try {
        const newTweet = await tweet.save();
        res.redirect('/');
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateTweetForm = async (req, res) => {
    const tweet = await Tweet.findById(req.params.id).populate('user', 'email');
    if (!tweet) {
        return res.status(404).json({ message: 'Twit not found' });
    }

    res.render('tweet-edit', {
        tweet: tweet,
    });
};

exports.updateTweet = async (req, res) => {
    try {
        const tweet = await Tweet.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            tweet: req.body.tweet,
        });

        if (!tweet) {
            return res.status(404).json({ message: 'Twit not found' });
        }

        res.redirect(`/tweets/${tweet.id}`);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteTweet = async (req, res) => {
    try {
        const tweet = await Tweet.findByIdAndDelete(req.params.id);

        if (!tweet) {
            return res.status(404).json({ message: 'Twit not found' });
        }

        res.redirect('/');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
