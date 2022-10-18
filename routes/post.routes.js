const express = require('express');

const indexControllers = require('../controllers/post.controllers');

const router = express.Router()

router.get('/', indexControllers.getPosts)

router.post('/', indexControllers.addPost)

router.get('/:id', indexControllers.getPost)

router.put('/', indexControllers.editPost)

router.delete('/:id', indexControllers.deletePost)

module.exports = router