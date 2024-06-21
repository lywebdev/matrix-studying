const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TweetSchema = new Schema({
    title: { type: String, required: true, minLength: 20, maxLength: 50 },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    tweet: { type: String, required: true, maxLength: 50 },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Tweet', TweetSchema);