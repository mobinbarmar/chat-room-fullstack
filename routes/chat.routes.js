const express = require('express');

const chatController = require('../controllers/chat.controller');

const router = express.Router()

router.post('/', chatController.addMessage)

router.get('/', chatController.getMessages)

router.delete('/:id', chatController.deleteMessage)

router.put('/', chatController.editMessage)

module.exports = router