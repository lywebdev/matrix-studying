const express = require('express');
const jwt = require('jsonwebtoken');
const Post = require('./../models/Post');
const router = express.Router();
const postRouter = express.Router();

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};


postRouter.use(authenticateJWT);


postRouter.get('/', async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.json(posts);
    } catch (err) {
        res.status(500).send(err);
    }
});

postRouter.post('/', async (req, res) => {
    const { title, content } = req.body;

    if (title.length < 5 || content.length < 25) {
        return res.status(400).send('The title must be at least 5 characters long, and the text must be at least 25 characters long');
    }

    const post = new Post({ title, content });

    try {
        await post.save();
        res.status(201).json(post);
    } catch (err) {
        res.status(500).send(err);
    }
});

postRouter.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).send('Post not found');
        }
        res.json(post);
    } catch (err) {
        res.status(500).send(err);
    }
});

postRouter.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).send('Post not found');
        }

        await post.deleteOne();
        res.status(204).send();
    } catch (err) {
        res.status(500).send(err);
    }
});

postRouter.post('/:id/comments', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).send('Post not found');
        }

        post.comments.push({ content: req.body.content });
        await post.save();

        res.status(201).json(post);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.use('/api/posts', postRouter);

module.exports = router;