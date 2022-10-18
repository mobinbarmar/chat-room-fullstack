const express = require('express');

const chatController = require('../controllers/chat.controller');

const router = express.Router()

router.post('/', chatController.addMessage)

router.get('/', chatController.getMessages)

router.delete('/:id', chatController.deleteMessage)

router.put('/', chatController.editMessage)

router.get('/distinct-users', chatController.getDistinctUsers)

module.exports = router