const Post = require('../models/post');

exports.getAllPosts = async (request, response) => {
    const posts = await Post.find().sort({
        createdAt: -1
    });

    response.render('posts/index', {posts});
}

exports.createPost = async (request, response) => {
    const { title, content } = request.body;

    if (title.length < 5 || content.length < 25) {
        response.send('The title must be at least 5 characters long, and the text must be at least 25 characters long');
    }

    const post = new Post({ title, content });


    await post.save();
    response.redirect('/');
}

exports.showCreateForm = (request, response) => {
    response.render('posts/create');
}

exports.showPost = async (request, response) => {
    const post = await Post.findById(request.params.id);

    response.render('posts/show', {post})
}

exports.deletePost = async (request, response) => {
    const post = await Post.findById(request.params.id);

    await post.deleteOne();
    response.redirect('/');
}