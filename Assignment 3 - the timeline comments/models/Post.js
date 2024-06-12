const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const postSchema = new Schema({
    title: String,
    content: String,
    comments: [commentSchema],
})


module.exports = mongoose.model('Post', postSchema);