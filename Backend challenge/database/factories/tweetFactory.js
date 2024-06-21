require('dotenv').config();
require('./../../config/db');

const Tweet = require('./../../models/TweetSchema');
const User = require('./../../models/UserSchema');


function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

async function createTweets() {
    try {
        const users = await User.find();

        const tweets = [];
        for (let i = 0; i < 100; i++) {
            const randomUser = users[Math.floor(Math.random() * users.length)];

            const titleLength = Math.floor(Math.random() * (50 - 20 + 1)) + 20;
            const title = generateRandomString(titleLength);

            const tweetLength = Math.floor(Math.random() * 50) + 1;
            const tweet = generateRandomString(tweetLength);

            const tweetObject = new Tweet({
                title: title,
                user: randomUser._id,
                tweet: tweet,
                createdAt: new Date()
            });
            await tweetObject.save();
            tweets.push(tweetObject);
        }
        console.log('Created tweets:', tweets);
    } catch (error) {
        console.error('Error creating tweets:', error);
    } finally {
    }
}


createTweets().then(r => {
    console.log('Successful');
    process.exit();
});
