const express = require('express')
const router = express.Router();
const postController = require('../Controller/post')

router.get('/post/:postId', postController.getSinglePost)

router.get('/post', postController.getAllPost)

router.post('/post', postController.createPost)

router.put('/post/:postId', postController.updatePost)

router.delete('/post/:postId', postController.deletePost)

module.exports = router