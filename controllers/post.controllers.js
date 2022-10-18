const indexModels = require('../models/post.models');

exports.getPosts = async (req, res) => {
    try {
        res.status(200).json(await indexModels.findAll())
    } catch (err) {
        res.status(500).send(err)
    }
}

exports.addPost = async (req, res) => {
    try {
        await indexModels.create(req.body)
        res.status(201).json({
            message: 'Post Added!'
        })
    } catch (err) {
        res.status(500).send(err)
    }
}

exports.getPost = async (req, res) => {
    try {
        res.status(200).json(await indexModels.findByPk(req.params['id']))
    } catch (err) {
        res.status(404).json({
            message: `can't find this user`
        })
    }
}

exports.editPost = async (req, res) => {
    try {
        const post = await indexModels.findByPk(req.body.id)
        post.title = req.body.title
        post.description = req.body.description
        await post.save()
        res.status(204).json({
            message: 'your post edited!'
        })
    } catch (err) {
        res.status(500).send(err)
    }
}

exports.deletePost = async (req, res) => {
    try {
        await indexModels.destroy({ where: { id: req.params['id'] } })
        res.status(200).json({
            message: 'post deleted'
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err)
    }
}