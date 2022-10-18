const seq = require('../config/db');

const { DataTypes } = require('sequelize');

const postSchema = seq.define('postSchema', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = postSchema