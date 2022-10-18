const chatModel = require('../models/chat.models');

exports.addMessage = async (req, res) => {
    console.log(req.body);
    try {
        await chatModel.create(req.body)
        res.status(201).json({
            message: 'message sent!'
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err)
    }
}

exports.getMessages = async (req, res) => {
    try {        
        res.status(200).json(await chatModel.findAll())
    } catch (err) {
        res.status(500).send(err)
    }
}

exports.deleteMessage = async (req, res) => {
    try {
        await chatModel.destroy({ where: { id: req.params['id'] } })
        res.status(200).json({
            message: 'message deleted!'
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.editMessage = async (req, res) => {
    try {
        const message = await chatModel.findByPk(req.body.id)
        console.log(req.body);
        message.message = req.body.message
        await message.save()
        res.status(201).json({
            message: 'Post edited!'
        })
    } catch (err) {
        // res.status(500).send(err)
        console.log(err);
    }
}