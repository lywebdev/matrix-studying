require('dotenv').config();
require('./../../config/db');

const mongoose = require('mongoose');
const Tweet = require('./../../models/TweetSchema');
const User = require('./../../models/UserSchema');

async function clearDatabase() {
    try {
        await User.deleteMany({});
        await Tweet.deleteMany({});

        console.log('Database cleared successfully.');
    } catch (error) {
        console.error('Error clearing database:', error);
    } finally {
        await mongoose.disconnect();
    }
}

clearDatabase().then(r => {
    console.log('Successful');
    process.exit();
});