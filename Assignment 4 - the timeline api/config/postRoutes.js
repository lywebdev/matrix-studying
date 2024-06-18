const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');


router.get('/', postController.getAllPosts);
router.get('/posts/create', postController.showCreateForm);
router.post('/posts/create', postController.createPost);
router.get('/posts/:id', postController.showPost);
router.post('/posts/delete/:id', postController.deletePost);

router.post('/posts/:id/comments', postController.addComment);

// route.group()


module.exports = router;